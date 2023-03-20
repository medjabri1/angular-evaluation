import { Component } from '@angular/core';

import { faUser, faDollarSign, faVenus, faMars, faPiggyBank, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dashboard-route',
  templateUrl: './dashboard-route.component.html',
  styleUrls: ['./dashboard-route.component.css']
})
export class DashboardRouteComponent {

  faUser = faUser;
  faDollarSign = faDollarSign;
  faVenus = faVenus;
  faMars = faMars;
  faPiggyBank = faPiggyBank;
  faMoneyBill = faMoneyBill;

  customers: Customer[] = [];
  stats = {
    'total_customers': 0,
    'total_balance': 0,
    'average_balance': 0,
    'total_female': 0,
    'total_male': 0,
    'total_save': 0,
    'total_check': 0
  }

  constructor(private customerService: CustomerService) {}
  
  ngOnInit(): void {
    this.customerService
        .getCustomers()
        .subscribe(customers => {
          this.customers = customers;
          this.setStats();
        });
  }

  setStats() {
    this.stats.total_customers = this.customers.length;
    this.stats.total_male = this.customers.filter(customer => customer.gender.toLowerCase() == 'male').length;
    this.stats.total_female = this.customers.filter(customer => customer.gender.toLowerCase() == 'female').length;
    this.stats.total_balance = Math.round(this.customers.reduce((total, customer) => total + customer.balance, 0));
    this.stats.average_balance = this.stats.total_balance / this.stats.total_customers;
    this.stats.total_check = this.customers.filter(customer => customer.type.toLowerCase() == 'check').length;
    this.stats.total_save = this.customers.filter(customer => customer.type.toLowerCase() == 'save').length;
  }
}
