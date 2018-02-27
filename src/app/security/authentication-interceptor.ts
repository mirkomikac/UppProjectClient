import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
        .catch((error, caught) => {
            if (error instanceof HttpErrorResponse) {
                this.redirectRoute(error);
              }
            return Observable.throw(error);
        }) as any;
    }
    private redirectRoute(error : HttpErrorResponse){
        switch(error.status){
            case 403: {
                this.router.navigate(['/login']);
            }
            default: {
                return;
            }
        }
    }
}