import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Token } from '../models/token.model';
import { TOKEN } from '../shared/utils/consts';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Salvo il mio token al login e lo salvo il localStorage
    const tokens = new Token(JSON.parse(localStorage.getItem(TOKEN)!));
    if (tokens && tokens.accessToken) {
      const authorization = tokens.accessToken;
      // Passo alla chiamata la richiesta con gli headers settati, in caso di errore -> catchError gestirà l errore
      return next.handle(request.clone({ setHeaders: { authorization } })).pipe(catchError((res) => this.handleError(request, next, res, tokens)));
    }
    // Passo alla chiamata la richiesta con gli headers settati, in caso di errore -> catchError gestirà l errore
    return next.handle(request).pipe(catchError((res) => this.handleError(request, next, res, tokens)));
  }
  // Mi torna un observable, gli interceptor lavorano su observable, in pratica mi deve sempre tornare questo: next.handle(request)
  handleError(req: HttpRequest<any>, next: HttpHandler, res: HttpResponse<any>, currentToken: Token | undefined): Observable<HttpEvent<unknown>> {
    if (res.status === 403 || res.status === 401) {
      if (currentToken && currentToken?.refreshToken) {
        const tokens = new Token({
          accessToken: '',
          idToken: '',
          refreshToken: '',
        });
        localStorage.setItem(TOKEN, JSON.stringify(tokens));
        const authorization = tokens.accessToken;
        const clonedRequest = req.clone({ setHeaders: { authorization } });
        return next.handle(clonedRequest);
      } else {
        return throwError(() => new Error(res.body));
      }
    } else {
      return throwError(() => new Error(res.body));
    }
  }
}
