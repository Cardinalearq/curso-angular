import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  public formulario: FormGroup;

  constructor (private fb: FormBuilder){
    this.formulario = this.fb.group({
      nombre: ['', [Validators.minLength(3), Validators.required]],
      edad: ['', [Validators.required]], 
      // Validators.pattern('^[0-9]+$') --> eliminado porque type number ya lo resuelve
      email: ['', [Validators.email, Validators.required]],
      mensaje: ['', [Validators.minLength(5), Validators.required]]
    });
  }

  public resultado: any = null;

  submit() {
    if (this.formulario.valid) {
      this.resultado = this.formulario.value;
      this.formulario.reset(); 
    } else {
      this.resultado = null;
      this.formulario.markAllAsTouched();
    }
  }
  

  get nombre(){
    return this.formulario.get('nombre');
  }

  get isNombreInvalid(){
    return this.nombre?.touched && this.nombre?.invalid;
  }

  get edad(){
    return this.formulario.get('edad');
  }

  get isEdadInvalid(){
    return this.edad?.touched && this.edad?.invalid;
  }

  get email(){
    return this.formulario.get('email');
  }

  get isEmailInvalid(){
    return this.email?.touched && this.email?.invalid;
  }

  get mensaje(){
    return this.formulario.get('mensaje');
  }

  get isMensajeInvalid(){
    return this.mensaje?.touched && this.mensaje?.invalid;
  }

}
