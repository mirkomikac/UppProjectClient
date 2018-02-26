import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserTask } from '../shared/UserTask';

@Injectable()
export class OffersService {

  constructor(private http: Http) { }

  startAuction() {
    return this.http.get("/api/offers/startAuction").toPromise().catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }

}