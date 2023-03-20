import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRouteComponent } from './components/home-route/home-route.component';
import { DashboardRouteComponent } from './components/dashboard-route/dashboard-route.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomersRouteComponent } from './components/customers-route/customers-route.component';
import { AboutRouteComponent } from './components/about-route/about-route.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { CreateRouteComponent } from './components/create-route/create-route.component';
import { DetailsRouteComponent } from './components/details-route/details-route.component';
import { NotFoundRouteComponent } from './components/not-found-route/not-found-route.component';
import { EditableElementComponent } from './components/editable-element/editable-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    DashboardRouteComponent,
    NavigationComponent,
    CustomersRouteComponent,
    AboutRouteComponent,
    FooterComponent,
    CreateRouteComponent,
    DetailsRouteComponent,
    NotFoundRouteComponent,
    EditableElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
