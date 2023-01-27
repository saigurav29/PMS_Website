import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
    constructor() { 
    }

    getDepartmentList():Observable<any[]>
    {
        const departmentList:any=[{
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },{
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },{
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },{
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },{
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        },
        {
            "departmentId":1,
            "departmentName":'Department 1',
            "status":'Active',
        },
        {
            "departmentId":2,
            "departmentName":'Department 2',
            "status":'Active',
        },
        {
            "departmentId":3,
            "departmentName":'Department 3',
            "status":'In-Active',
        }];
        return of(departmentList);
    }
}