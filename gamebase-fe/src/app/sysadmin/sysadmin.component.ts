import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sysadmin',
  templateUrl: './sysadmin.component.html',
  styleUrls: ['./sysadmin.component.scss']
})
export class SysadminComponent implements OnInit {

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
