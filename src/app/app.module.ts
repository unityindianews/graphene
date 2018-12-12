import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReferenceComponent } from './reference/reference.component';
import { RouterModule } from '@angular/router';
import { Approute } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approute,{useHash:true})
  ],
  providers: [ReferenceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
