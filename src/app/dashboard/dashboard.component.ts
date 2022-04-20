import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component} from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, chart: 'bar' },
          { title: 'Card 2', cols: 1, rows: 1, chart: 'line' },
          { title: 'Card 3', cols: 1, rows: 1, chart: 'radar' },
          { title: 'Card 4', cols: 1, rows: 1, chart: 'doughnut' }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, chart: 'bar' },
        { title: 'Card 2', cols: 1, rows: 1, chart: 'line' },
        { title: 'Card 3', cols: 1, rows: 2, chart: 'radar' },
        { title: 'Card 4', cols: 1, rows: 1, chart: 'doughnut' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
