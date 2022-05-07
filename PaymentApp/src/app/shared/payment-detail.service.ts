import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  formData:PaymentDetail = new PaymentDetail();
  readonly baseUrl = 'https://localhost:7016/api/PaymentDetails'
  list : PaymentDetail[];

  postPaymentDetail(){
    return this.http.post(this.baseUrl, this.formData)
  }

  deletePaymentDetail(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
