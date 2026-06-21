import { Routes } from '@angular/router';
import { LandingLayout } from './core/layouts/landing-layout/landing-layout';
import { Home } from './landing/pages/home/home';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Layout } from './dashboard/layout/layout';
import { HomeDashboard } from './dashboard/home/home'; // import { Home as DashboardHome } from './dashboard/home/home';
import { Pets } from './dashboard/pets/pets';
import { PetForm } from './dashboard/pet-form/pet-form';
import { Services } from './dashboard/services/services';
import { Booking } from './dashboard/booking/booking';
import { History } from './dashboard/history/history';
import { Profile } from './dashboard/profile/profile';
import { Admin } from './dashboard/admin/admin';

export const routes: Routes = [
    { path: '', component: LandingLayout, children: [ { path: '', component: Home}]},
    { path: 'login', component: Login},
    { path: 'register', component: Register},
    { path: 'dashboard', component: Layout, children: [
        { path: 'home', component: HomeDashboard},
        { path: 'pets', component: Pets},
        { path: 'pet-form', component: PetForm},
        { path: 'service', component: Services},
        { path: 'booking', component: Booking},
        { path: 'history', component: History},
        { path: 'profile', component: Profile},
        { path: 'admin', component: Admin},
        { path: '', redirectTo: 'home', pathMatch: 'full'},
    ]},
];
