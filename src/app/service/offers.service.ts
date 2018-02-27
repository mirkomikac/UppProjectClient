import { Injectable } from '@angular/core';
import { UserTask } from '../shared/UserTask';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OffersService {

  constructor(private http: HttpClient) { }

  startAuction() {
    return this.http.get("/api/offers/startAuction").toPromise().catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }

}