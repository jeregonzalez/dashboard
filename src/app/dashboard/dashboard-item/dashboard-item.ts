import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
  // host: {
  //   class: 'dashboard-item',
  // },
})
export class DashboardItem {
  title = input.required<string>();
  image = input.required<{ src: string; alt: string }>();
}
