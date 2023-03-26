import { Injectable } from '@angular/core';
import { TicketReq } from '../models/ticket-req.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  /**
   * @return tickets data
   */
  getTicketData(): TicketReq {

    return {
      data: [
        {
          day: "ორშაბათი, 1 იანვ",
          checkInOut: "გამზგავრება",
          passenger: "+2",
          fly: {
            fromClock: "14:00",
            toClock: "09:10",
            stations: [1, 1, 1],
            fromCity: "თბილისი (TBS)",
            toCity: "პარიზი (CDG)",
            stop: 1,
            total: "3 სთ, 20",
          },
          flyTime: "8 საათი, 20 წუთი",
        },
        {
          day: "შაბათი, 29 აპრ",
          checkInOut: "დაბრუნება",
          passenger: "+2",
          fly: {
            fromClock: "14:00",
            toClock: "09:10",
            stations: [1, 2, 3, 2],
            fromCity: "ნიუ იორკი (NY)",
            toCity: "პარიზი (CDG)",
            stop: 2,
            total: "3 სთ, 20",
          },
          flyTime: "8 საათი, 20 წუთი",
        }
      ],
      info: ["ეკონომ კლასი", "2 მგზავრი", "20კგ ბარგი"],
      total: 640,
      monthly: "72.33",
      mobile: [
        {
          day: "",
          checkInOut: "",
          passenger: "",
          fly: {
            fromClock: "10:45",
            toClock: "03:10",
            stations: [1, 2, 1],
            fromCity: "თბილისი",
            toCity: "პარიზი",
            stop: 1,
            total: "5 სთ, 20",
          },
          flyTime: "",
        },
      ]
    }

  }
}
