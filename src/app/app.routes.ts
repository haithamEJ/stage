import { Routes } from '@angular/router';
import { JsonTableComponent } from './json-table/json-table.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { WelcomeComponent } from './welcome/welcome.component';


export const routes: Routes = [

  {path:'', component:WelcomeComponent},
  {path:'tables', component:JsonTableComponent},
  {path:'snap', component:FaceSnapComponent}

];
