import { sql } from '@vercel/postgres';

interface Ticket {
  status: string;
  iata_from: string;
  iata_to: string;
  departure_date: string;
  arrival_date: string;
  created_at: string;
  updated_at?: string;
  user_id: number;
}

export default class TicketController {
  static async createTicket(tickets: Ticket[]) {
    try {
      const ids = await Promise.all(
        tickets.map(async ticket => {
          const {
            status,
            iata_from,
            iata_to,
            departure_date,
            arrival_date,
            user_id,
          } = ticket;
          // const id =
          //   await sql`insert into tickets (status, iata_from, iata_to, departure_date, arrival_date, created_at, updated_at, user_id) values (${status}, ${iata_from}, ${iata_to}, ${departure_date}, ${arrival_date}, now(), now(), ${user_id}) returning id;`;

          // if (id) {
          //   throw new Error('Ticket not created');
          // }
        }),
      );

      // const ticket =
      //   await sql`insert into tickets (id, name, price, description, image, date, time, location, address, city, state, zip, country, status, created_at, updated_at) values (uuid_generate_v4(), ${name}, ${price}, ${description}, ${image}, ${date}, ${time}, ${location}, ${address}, ${city}, ${state}, ${zip}, ${country}, ${status}, now(), now()) returning *;`;
    } catch (err: any) {
      console.log(err);
      return {
        status: 500,
        message: err.message,
      };
    }
  }
}
