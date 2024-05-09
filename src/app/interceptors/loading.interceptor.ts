import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, finalize, Observable, throwError } from "rxjs";
import { LoadingService } from "../services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private readonly loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.increaseWaitingRequestCount();
    return next.handle(request).pipe(
      catchError(error => {
        return throwError(error);
      }),
      finalize(() => {
        setTimeout(() => {
          this.loadingService.decreaseWaitingRequestCount();
        }, 200);
      })
    );
  }
}
