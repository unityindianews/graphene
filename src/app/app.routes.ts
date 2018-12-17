import { Routes } from '@angular/router';
import { CrudComponent } from './reference/crud/crud.component';
import { FormValidationComponent } from './reference/form-validation/form-validation.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { AnalysisComponent } from './reference/analysis/analysis.component';
import { ResearchComponent } from './reference/research/research.component';


export const Approute: Routes = [
    {path:'',component:HomepageComponent},
    {path:'analysis',component:AnalysisComponent},
    {path:'crud',component:CrudComponent},
    {path:'form-validation',component:FormValidationComponent},
    {path:'research',component:ResearchComponent}
]