import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    constructor() { 
    }

    getEmployeeList():Observable<any[]>
    {
        const employeList:any=[{
            "employeeId":1,
            "empFirstName":'Employee 1',
            "emailId":'employee1@ok.com',
            "dob":"10-01-2000",
            "gender":"M",
            "address":"Employee Address",
            "pincode":"123122"
        },
        {
            "employeeId":2,
            "empFirstName":'Employee 2',
            "emailId":'employee2@ok.com',
            dob:"05-01-1995",
            gender:"F",
            address:"Employee Address",
            pincode:"323422"
        },
        {
            employeeId:3,
            empFirstName:'Employee 3',
            emailId:'employee3@ok.com',
            dob:"02-04-1999",
            gender:"M",
            address:"Employee Address",
            pincode:"143422"
        }];
        return of(employeList);
    }
}