import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items: MenuItem[] = [];
  constructor(
  ) { }

  ngOnInit() {
  //   this.items = [
  //     {label: 'Home', icon: 'pi pi-fw pi-home'},
  //     {label: 'Categories', icon: 'pi pi-fw pi-folder-open'}, 
  // ];
  }

}
