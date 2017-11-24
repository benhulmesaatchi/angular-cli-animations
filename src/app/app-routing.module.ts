import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Process Pages */
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Error: Page not found!'} },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}