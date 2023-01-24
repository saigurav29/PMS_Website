import {EventEmitter, Injectable } from '@angular/core';
import { NavItem } from '../Layout/main/nav-items';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>("");

    constructor(private router: Router) { 
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl.next(event.urlAfterRedirects);
        }
      });
    }
    menuItems: NavItem[]=[];
   
    public closeNav() {
      // this.appDrawer.close();
    }
  
    public openNav() {
      // this.appDrawer.open();
    }
    sidemenuLIst(){
        this.menuItems = [
          {
            displayName: 'Dashboard',
            iconName: 'dashboard',
            route: 'app/dashboard',
            disabled:false,
            isChildren:false,
            children: []
          },
          {
            displayName: 'Employee List',
            iconName: 'person',
            route: 'app/employee',
            disabled:false,
            isChildren:false,
            children: []
          },
          {
            displayName: 'Projects ',
            iconName: 'content_paste',
            route: '',
            disabled:false,
            isChildren:true,
            children: [
              {
                displayName: 'Project List',
                iconName: 'content_paste',
                route: 'app/project',
                disabled:false,
                isChildren:false,
                children: []
              },
              {
                displayName: 'Stories',
                iconName: 'library_books',
                route: '',
                disabled:false,
                isChildren:false,
                children: []
              }
            ]
          },
          {
            displayName: 'Department',
            iconName: 'people',
            route: '',
            disabled:false,
            isChildren:false,
            children: [
              {
                displayName: 'Department List',
                iconName: 'format_list_bulleted',
                route: 'app/department',
                disabled:false,
                isChildren:false,
                children: []
              }
            ]
          }
        ];
        return this.menuItems;
      }
}