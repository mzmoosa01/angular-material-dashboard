import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {

  @Input()
  public title: string = '';
  @Input()
  public type = '';

  constructor() { }

  ngOnInit(): void {
  }

}
