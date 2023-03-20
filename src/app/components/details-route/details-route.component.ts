import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';

import { faFileEdit, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-route',
  templateUrl: './details-route.component.html',
  styleUrls: ['./details-route.component.css']
})
export class DetailsRouteComponent {

  customer? : Customer;
  editedCustomer? : Customer;

  isEditing: boolean = false;

  faFileEdit = faFileEdit;
  faSave = faSave;

  INPUT_TYPES = {
    number: 'number',
    text: 'text',
  }

  constructor(
    private customerService: CustomerService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getData();  
  }

  getData() {
    this.activeRoute.params
        .pipe(switchMap((params) => this.customerService.getCustomerById(params['id'])))
        .subscribe({
          next: (customer) => {
            this.customer = customer;
            this.editedCustomer = customer;
          },
          error: () => this.router.navigate(['/not-found'])
        });
  }

  editCustomer(): void {
    this.isEditing = true;
  }

  saveEdits(): void {
    this.isEditing = false;
    if(this.customer != undefined) {

      this.customerService
      .updateCustomer(this.customer)
      .subscribe((updatedCustomer) => {
        this.customer = updatedCustomer;
      });
    }
  }

  valueChange(data: any): void {

    let value;

    if(['type', 'gender'].includes(data.prop)) {

      const options = data?.event?.target?.options;
      const selectedIndex = options?.selectedIndex;
      
      if(selectedIndex != undefined) {
        value = options[selectedIndex]?.value;
      }

    } else {
      value = data?.event?.target?.value;
    }

    if(value != undefined) {

      if(this.editedCustomer != undefined) {

        switch(data.prop) {

          case 'firstName':
            this.editedCustomer.firstName = value;
            break;
            
          case 'lastName':
            this.editedCustomer.lastName = value;
            break;
            
          case 'address':
            this.editedCustomer.address = value;
            break;
            
          case 'phone':
            this.editedCustomer.phone = value;
            break;
            
          case 'gender':
            this.editedCustomer.gender = value;
            break;
            
          case 'balance':
            this.editedCustomer.balance = Number(value);
            break;
            
          case 'type':
            this.editedCustomer.type = value;
            break;
            
          case 'email':
            this.editedCustomer.email = value;
            break;

        }
      }
    }
    
  }

}
