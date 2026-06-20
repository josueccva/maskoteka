import { Routes } from '@angular/router';
import { LandingLayout } from './core/layouts/landing-layout/landing-layout';
import { Home } from './landing/pages/home/home';

export const routes: Routes = [
    { path: '', component: LandingLayout, children: [ { path: '', component: Home}]},
];
