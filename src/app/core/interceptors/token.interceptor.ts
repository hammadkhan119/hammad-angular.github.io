import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            let bearerToken = `Bearer ${token}`;
            request = request.clone({
                setHeaders: {
                  Authorization: bearerToken
                }
              });
        }
        return next.handle(request);
    }
}