import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators/validators.service';
import { FORM_DINAMICO } from './jsonForm';

@Component({
  selector: 'omnia-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.scss'],
})
export class ReactiveDrivenComponent implements OnInit {
  emailStandalone: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
  ]);

  myFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]),
    name: new FormControl('Paolo'),
  });

  myFormBuilder = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
    name: ['Bryan', [], []],
    address: this.formBuilder.group({
      street: [''],
    }),
  });

  FORMDINAMICO = FORM_DINAMICO;
  formDinamico: FormGroup = new FormGroup({});
  constructor(private readonly formBuilder: FormBuilder, private readonly validatorsService: ValidatorsService) {}

  ngOnInit(): void {
    this.handleControl();
  }

  sendStandaloneForm() {
    console.log(this.emailStandalone);
  }
  sendMyFormGroup() {
    console.log(this.myFormGroup);
  }
  sendMyFormBuilder() {
    console.log(this.myFormBuilder.value);
  }

  handleControl() {
    this.FORMDINAMICO.controls.forEach((control) => {
      const syncValidators = this.validatorsService.buildSyncValidator(control.syncValidators);
      const asyncValidators = this.validatorsService.forbiddenNameAsyncValidatorObservable(control.asyncValidators);

      const controls: FormControl = new FormControl(control.defaultValue, syncValidators, asyncValidators);
      this.formDinamico.addControl(control.id, controls);
    });
  }
}
