import { Routes } from '@angular/router';
import { CrudComponent } from './reference/crud/crud.component';
import { FormValidationComponent } from './reference/form-validation/form-validation.component';
import { HomepageComponent } from './client/homepage/homepage.component';



export const Approute: Routes = [
    {path:'',component:HomepageComponent},
    {path:'crud',component:CrudComponent},
    {path:'form-validation',component:FormValidationComponent}
]