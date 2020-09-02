import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { MainComponent } from './main/main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormComponent } from './form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
// import { MatAutocompleteModule, MatInputModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MainComponent,
    ContactUsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'form-component',
        component: FormComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'main-component',
        component: MainComponent
      }
    ]),
    AppRoutingModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
