import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    constructor() { 
    }

    getProjectList():Observable<any[]>
    {
        const projectList:any=[{
            "projectId":1,
            "projectName":'project 1',
            "status":'Not Started',
        },
        {
            "projectId":2,
            "projectName":'project 2',
            "status":'Inprogress',
        },
        {
            "projectId":3,
            "projectName":'project 3',
            "status":'Done',
        }];
        return of(projectList);
    }
}