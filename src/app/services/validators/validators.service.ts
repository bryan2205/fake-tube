import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  // Sync Validator
  forbiddenNameValidator(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.toUpperCase().trim() === name.toUpperCase().trim() ? { forbidden: true } : null;
    };
  }

  buildSyncValidator(value: string[]): any[] {
    const validators: any[] = [];
    value.forEach((s: string) => {
      switch (s) {
        case 'required':
          validators.push(Validators.required);
          break;
        case 'email':
          validators.push(Validators.email);
          break;
        default:
          break;
      }
    });
    return validators;
  }

  // Async validator Promise
  forbiddenNameAsyncValidatorPromise(name: string[]): AsyncValidatorFn {
    return (controlPromise: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          name.forEach((n) => {
            const response = this.forbiddenNameValidator(n);
            const error = response(controlPromise);
            resolve(error);
          });
          // console.log('PROMISE ERROR', error);
        }, 3000);
      });
    };
  }

  // Async validator Observable
  forbiddenNameAsyncValidatorObservable(name: string[]): AsyncValidatorFn {
    return (controlObservable: AbstractControl): Observable<ValidationErrors | null> => {
      let error: ValidationErrors | null = null;
      name.forEach((n) => {
        const response = this.forbiddenNameValidator(n);
        error = response(controlObservable);
      });
      return of(error).pipe(delay(3000));
      // this.apiService.getCF()
    };
  }
}
