import { Component, OnInit } from '@angular/core';
import { TicketReq } from '../models/ticket-req.model';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  ticketData!: TicketReq;
  constructor(private _service: TicketService) { }

  ngOnInit(): void {
    this.getTicketData();
  }

  getTicketData() {
    this.ticketData = this._service.getTicketData();
  }
}
