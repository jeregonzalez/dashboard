import { Component, input, output, signal } from '@angular/core';
import { Ticket as TicketModel } from './ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  data = input.required<TicketModel>();
  close = output<void>();

  detailsVisible = signal(false);

  onToggleDetails(): void {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted(): void {
    this.close.emit();
  }
}
