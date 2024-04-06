import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError} from 'rxjs';
import { ErrorService } from '../services/error.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  let _errorService = inject(ErrorService)
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const errorMessage = _errorService.getErrorMessage(error);
        throw errorMessage;
    })
  );
};
