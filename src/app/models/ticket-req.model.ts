import { Ticket } from "./ticket.model";

export class TicketReq {
    data!: Ticket[];
    info!: string[];
    total!: number;
    monthly!: string;
    mobile!: Ticket[];
}