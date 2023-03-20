import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';
import { CustomerFormData } from '../models/CustomerFormData';


const API_URL = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL);
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/${id}`);
  }

  getCustomerByName(name: string): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}?name=${name}`);
  }

  createCustomer(customerFormData: CustomerFormData): Observable<Customer> {
    return this.http.post<Customer>(API_URL, customerFormData);
  }

  updateCustomer(customer: Customer) {
    console.log('save edits - service ');
    return this.http.put<Customer>(`${API_URL}/${customer.id}`, customer);
  }

  deleteCustomer(customer: Customer) {
    return this.http.delete(`${API_URL}/${customer.id}`);
  }

  search(query: string, searchBy: string): Observable<Customer[]> {
    if(searchBy == 'id') {
      return this.http.get<Customer[]>(`${API_URL}?${searchBy}_like=${query}`);
    } else {
      return this.http.get<Customer[]>(`${API_URL}?q=${query}`);
    }
  }

}
