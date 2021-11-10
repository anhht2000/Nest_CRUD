import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
  NotAcceptableException,
  RequestTimeoutException,
} from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        return throwError(new NotAcceptableException());
      }),
      // timeout(1000),
      // catchError((err) => {
      //   console.log('err', err);

      //   if (err instanceof TimeoutError) {
      //     return throwError(new RequestTimeoutException());
      //   }
      //   return throwError(err);
      // }),
    );
  }
}
