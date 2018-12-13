import { Routes } from '@angular/router';
import { CrudComponent } from './reference/crud/crud.component';
import { FormValidationComponent } from './reference/form-validation/form-validation.component';


export const Approute: Routes = [
    {path:'crud',component:CrudComponent},
    {path:'form-validation',component:FormValidationComponent}
]