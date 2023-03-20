import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRouteComponent } from './components/dashboard-route/dashboard-route.component';
import { HomeRouteComponent } from './components/home-route/home-route.component';
import { CustomersRouteComponent } from './components/customers-route/customers-route.component';
import { AboutRouteComponent } from './components/about-route/about-route.component';
import { CreateRouteComponent } from './components/create-route/create-route.component';
import { DetailsRouteComponent } from './components/details-route/details-route.component';
import { NotFoundRouteComponent } from './components/not-found-route/not-found-route.component';

const routes: Routes = [
  {
    path: '',
    component: HomeRouteComponent,
    title: 'Home - Bank Management',
  },
  {
    path: 'dashboard',
    component: DashboardRouteComponent,
    title: 'Dashboard - Bank Management',
  },
  {
    path: 'customers',
    component: CustomersRouteComponent,
    title: 'Customers - Bank Management',
  },
  {
    path: 'create',
    component: CreateRouteComponent,
    title: 'Create Customer - Bank Management',
  },
  {
    path: 'details/:id',
    component: DetailsRouteComponent,
    title: 'Details - Bank Management',
  },
  {
    path: 'about',
    component: AboutRouteComponent,
    title: 'Customers - Bank Management',
  },
  {
    path: 'not-found',
    component: NotFoundRouteComponent,
    title: 'Not Found - Bank Management',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
