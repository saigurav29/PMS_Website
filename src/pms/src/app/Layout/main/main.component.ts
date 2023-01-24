import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuService } from 'src/app/Services/menu.service';
import { NavItem } from './nav-items';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class MainComponent implements OnInit {


  @ViewChild('appDrawer') appDrawer: ElementRef | any;

  @ViewChild('sidenav') sidenav: MatSidenav | any;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
displayTopMenu:boolean = false;
navItems:NavItem[]|any;
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.navItems=this.menuService.sidemenuLIst();
  }
 
  ngAfterViewInit() {
    this.menuService.appDrawer = this.appDrawer;
    const ul = document.querySelectorAll("nav ul")
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  showTopMenu(){
    if(this.displayTopMenu){
      this.displayTopMenu = false;
    }else{
      this.displayTopMenu=true;
    }
  }
}
