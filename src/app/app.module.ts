import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/core/header/header.component';
import { FooterComponent } from './modules/core/footer/footer.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { RegistrationComponent } from './modules/auth/registration/registration.component';
import { TableComponent } from './modules/core/table/table.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    RegistrationComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
