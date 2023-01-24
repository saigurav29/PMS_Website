import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    constructor() { 
    }

    ValidateLogin():Observable<any>
    {
        const logindetails:any={
            "userId":1,
            "username":'User ABC',
        };
        return of(logindetails);
    }
}