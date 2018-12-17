import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Approute } from './app.routes';
import { CrudComponent } from './reference/crud/crud.component';
import { FormValidationComponent } from './reference/form-validation/form-validation.component';
import { HeaderComponent } from './client/header/header.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { AnalysisComponent } from './reference/analysis/analysis.component';
import { DefaultPipe } from './_pipe/default.pipe';
import { CustomDirective } from './_directives/custom.directive';
import { AnalysisService } from './_service/analysis.service';
import { ResearchComponent } from './reference/research/research.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CrudComponent,
    FormValidationComponent,
    HeaderComponent,
    AnalysisComponent,
    ResearchComponent,
    DefaultPipe,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(Approute,{useHash:true})
  ],
  providers: [AnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
