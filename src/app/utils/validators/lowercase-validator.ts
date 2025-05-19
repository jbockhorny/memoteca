import { AbstractControl, ValidationErrors } from '@angular/forms';

export function allLowercase(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  if (value !== value?.toLowerCase()) {
    return { notLowercase: true }; // Retorna um erro se não for tudo minúsculo
  }
  return null; // Retorna null se for válido
}
