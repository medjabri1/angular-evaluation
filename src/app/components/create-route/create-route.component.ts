import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent {

  customerForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customerForm = this.formBuilder.group({
      id: [uuidv4(),
        [],
      ],
      firstName: ['',
        [Validators.required, Validators.minLength(2),],
      ],
      lastName: ['',
        [Validators.required, Validators.minLength(2),],
      ],
      address: ['',
        [Validators.required, Validators.min(5), Validators.max(100)],
      ],
      phone: ['',
        [Validators.required,],
      ],
      email: ['',
        [Validators.required, Validators.email],
      ],
      gender: ['',
        [Validators.required,],
      ],
      type: ['',
        [Validators.required,],
      ],
      balance: [,
        [Validators.required,],
      ],

    });
  }

  submit() {
    this.isLoading = true;
    this.customerService
      .createCustomer(this.customerForm.value)
      .subscribe((customer: Customer) => {
        this.isLoading = false;
        this.customerForm.reset();
        this.router.navigate(['/details', customer.id]);
      });
  }

  canSubmit(): boolean {
    return this.customerForm.dirty && this.customerForm.valid;
  }



}
