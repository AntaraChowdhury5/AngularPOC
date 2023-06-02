import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() change : boolean= false
  signInForm!: FormGroup

  loggedIn: boolean = false;

  isSubmitClicked = false

  constructor(private formBuilder: FormBuilder, private authService: AuthServiceService) {
    this.signInForm = this.formBuilder.group({
      email: '',
      password: ''
    });

  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    },
    )
  }

  onSignIn() {
    this.loggedIn = true;
     this.isSubmitClicked = true;
    if (this.signInForm.invalid) {
      return;
    }

    const signInEmail = this.signInForm.get('email')?.value;

    const signInPassword = this.signInForm.get('password')?.value;

    const storedEmail = localStorage.getItem('email');

    const storedPassword = localStorage.getItem('password')

    if (signInEmail === storedEmail && signInPassword === storedPassword) {
      alert("Authentication sucesss")
      this.authService.sendData(true);
    } else {
      this.signInForm.controls['password'].setErrors({ incorrectCredentials: true });
      alert('Authentication failed');
    }

  }
}
