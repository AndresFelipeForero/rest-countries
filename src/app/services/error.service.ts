import { Injectable } from '@angular/core';
import { ErrorMessages } from '../models/error.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  errorMessages:ErrorMessages = {
    default: 'An unknown error occurred',
    clientSide: 'A client-side error occurred',
    400: 'Bad request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Resource not found',
    500: 'Internal server error',
    timeout: 'Request timeout'
};

  getErrorMessage(error: any): string {
    if (error instanceof Error) {
      return this.errorMessages.clientSide;
    } else if (error.status) {
      return this.errorMessages[error.status] || this.errorMessages.default;
    } else if (error.name === 'TimeoutError') {
      return this.errorMessages.timeout;
    } else {
      return this.errorMessages.default;
    }
  }
}
