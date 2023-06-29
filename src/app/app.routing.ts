import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ImproveErrorComponent } from './components/improve-error/improve-error.component';
import { ForgotPasswordComponent } from './examples/forgot-password/forgot-password.component';
import { VerifyForgotPasswordComponent } from './examples/verify-forgot-password/verify-forgot-password.component';
import { NewForgotPasswordComponent } from './examples/new-forgot-password/new-forgot-password.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    {path: 'create-user', component: CreateUserComponent},
    {path: 'list-user', component: ListUserComponent},
    {path: 'improve-error', component: ImproveErrorComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'verify-forgot-password', component: VerifyForgotPasswordComponent},
    {path: 'new-forgot-password', component: NewForgotPasswordComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
