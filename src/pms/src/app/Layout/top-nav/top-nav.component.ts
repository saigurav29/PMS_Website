import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(public navService: MenuService) { }

  ngOnInit(): void {
  }

}
