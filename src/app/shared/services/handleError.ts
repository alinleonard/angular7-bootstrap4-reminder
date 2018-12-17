import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class HandleError {
    public static handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          throwError(`An error occured: ${error.error.message}`);
        } else {
          throwError(
            `Backend returned code ${error.status}` +
            `body was: ${error.error}`
          );
        }
        return throwError('There is a problem with the service');
    }

}
