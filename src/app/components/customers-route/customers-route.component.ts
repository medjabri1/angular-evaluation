import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

import { faCircleInfo, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customers-route',
  templateUrl: './customers-route.component.html',
  styleUrls: ['./customers-route.component.css']
})
export class CustomersRouteComponent {

  faCircleInfo = faCircleInfo;
  faCircleXmark = faCircleXmark;
  faSpinner = faSpinner;

  customers: Customer[] = [];
  searchQuerySubject = new Subject<string>();
  searchBy: any = 'id';

  isDeleteLoading: any[] = [];

  constructor(private customerService: CustomerService) {
    this.searchQuerySubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query: string) => {
        this.search(query);
      });
  }

  ngOnInit(): void {
    this.customerService
        .getCustomers()
        .subscribe(customers => {
          this.customers = customers;
        });
  }

  search(query: string) {
    this.customerService.search(query, this.searchBy).subscribe((customers) => {
      this.customers = customers;
    });
  }

  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }

  removeCustomer(customer: Customer) {
    this.setIsLoading(customer, true);
    this.customerService.deleteCustomer(customer).subscribe(() => {
      this.customers = this.customers.filter((p) => p.id !== customer.id);
      this.setIsLoading(customer, false);
    });
  }

  getIsDeleteLoading(customer: Customer) {
    return this.isDeleteLoading.find((c) => c.id === customer.id)?.isLoading;
  }

  private setIsLoading(customer: Customer, isLoading: boolean) {
    this.isDeleteLoading = this.isDeleteLoading.map((c) => {
      if (c.id === customer.id) {
        return { ...c, isLoading };
      }
      return c;
    });
  }

}
