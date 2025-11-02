import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { Ticket as TicketModel } from './ticket/ticket.model';
import { Ticket } from './ticket/ticket';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets: TicketModel[] = [];

  onAdd(ticketData: { title: string; text: string }): void {
    const ticket: TicketModel = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open',
    };
    this.tickets.push(ticket);
  }

  onCloseTicket(id: string): void {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
