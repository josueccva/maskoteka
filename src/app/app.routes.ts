import { Routes } from '@angular/router';
import { LandingLayout } from './core/layouts/landing-layout/landing-layout';
import { Home } from './landing/pages/home/home';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

export const routes: Routes = [
    { path: '', component: LandingLayout, children: [ { path: '', component: Home}]},
    { path: 'login', component: Login},
    { path: 'register', component: Register},
];
