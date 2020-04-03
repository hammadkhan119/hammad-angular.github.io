import { Component, OnInit, Input } from '@angular/core';
import { WilsonService } from 'src/app/core/services/wilson.service';
import { Customer } from 'src/app/shared/models/customer.model';
import { Response } from 'src/app/shared/models/response.model';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private wilsonService: WilsonService) { }

  ngOnInit(): void {
   let test = this.invoiceId;
  }
  loginForm = new FormGroup(
    {
      customerId: new FormControl(''),
      invoiceId: new FormControl(''),
      email: new FormControl('')
});

  validateCustomer(): void {

    var customer = new Customer();
    customer.invoiceid = this.loginForm.value.customerId;
    customer.email = this.loginForm.value.invoiceId;
    customer.customerid = this.loginForm.value.email;
    this.wilsonService.validateCustomer(customer).subscribe(
      result => {
        // Handle result
        let response = result as Response;
        localStorage.setItem('token', JSON.stringify(response.data));
        console.log(localStorage.getItem('token'));
        this.wilsonService.getCustomerProducts().subscribe(
          products => {
            console.log(products)
          }
        );
      },
      error => {
        const formControl = this.loginForm.get("invoiceId");
        if (formControl) {
          formControl.setErrors({
            serverError: "Invoice number not found"
          });
        }
    
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );
  }
  get invoiceId() { return this.loginForm.get('invoiceId'); }
}
