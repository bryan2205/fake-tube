import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'omnia-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  messageMotivation: string = '';
  keyMotivation: string = '';
  constructor(private readonly activatedRoute: ActivatedRoute, private readonly router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (message: any) => {
        this.keyMotivation = message.motivation;
        switch (message.motivation) {
          case 'pageNotFound':
            this.messageMotivation = 'Pagina non trovata';
            break;
          case 'notAuthoraized':
            this.messageMotivation = 'Utente non autorizzato !';
            break;
          default:
            this.messageMotivation = 'Qualcosa è andato storto';
            break;
        }
      },
    });
  }

  goToHome() {
    if (this.keyMotivation === 'notAuthoraized') this.router.navigate(['public']);
    else this.router.navigate(['']);
  }
}
