import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Countries } from '../../core/countries.model';
import { lettersOnlyValidator, passwordValidator } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  form: FormGroup;
  countries!: Countries;
  citiesOptions: any;
  showSuccessMessage: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      firstname: ['', [Validators.required, lettersOnlyValidator()]],
      lastname: ['', [Validators.required, lettersOnlyValidator()]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator()]],
      country: ['', Validators.required],
      city: ['', Validators.required],
      acceptTermsConditions: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    const jsonFile = 'assets/countries.json';
    this.http.get(jsonFile).subscribe((res: any) => {
      this.countries = res;
    });
  }

  get firstname() {
    return this.form.controls['firstname'];
  }
  get lastname() {
    return this.form.controls['lastname'];
  }
  get email() {
    return this.form.controls['email'];
  }
  get password() {
    return this.form.controls['password'];
  }
  get country() {
    return this.form.controls['country'];
  }
  get city() {
    return this.form.controls['city'];
  }
  get acceptTermsConditions() {
    return this.form.controls['acceptTermsConditions'];
  }

  onCountryChange() {
    const selectedCountry = this.form.controls['country'].value;
    const selectedCountryData = this.countries.sudamerica.find(country => country.pais === selectedCountry);
    if (selectedCountryData) {
      this.citiesOptions = selectedCountryData.ciudades;
    } else {
      this.citiesOptions = [];
    }
  }

  onSubmit(): void {
    this.showSuccessMessage = true;
  }

}
