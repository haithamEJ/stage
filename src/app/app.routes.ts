import { Routes } from '@angular/router';
import { JsonTableComponent } from './json-table/json-table.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { DisplayTestComponent } from './display-test/display-test.component';
export const routes: Routes = [

 {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'tables', component: JsonTableComponent },
      { path: 'snap', component: FaceSnapComponent },
            { path: 'display', component: DisplayTestComponent },
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  }

];
