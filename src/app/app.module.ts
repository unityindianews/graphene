import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Approute } from './app.routes';
import { CrudComponent } from './reference/crud/crud.component';
import { FormValidationComponent } from './reference/form-validation/form-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approute,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
