import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  //url='http://localhost:8080/local/dev/adm/';
  url='https://demo.bloomingtec.mx/';

  constructor(private http: HttpClient) { }
  mail_(mail: Object){
    return this.http.post(`${this.url}mail.php`, JSON.stringify(mail));
    //return this.http.post('mail.php', JSON.stringify(mail));
  }
}
