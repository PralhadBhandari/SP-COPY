import { FormGroup } from "@angular/forms";

export function CredmustMatch(LoginEmail: string, RegisterEmail: string) {
  return (formGroup: FormGroup) => {

      const control = formGroup.controls[LoginEmail];
      const matchingControl = formGroup.controls[RegisterEmail];

      if (matchingControl.errors && !matchingControl.errors['CredmustMatch']) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ CredmustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
