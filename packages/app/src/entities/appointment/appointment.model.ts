import { User } from '../user/user.model';

export interface Appointment {
  id: string;
  startAt: Date;
  endAt: Date;
  userId: string;
  notes: string;
  type: string;
}

export type AppointmentWithUser = Appointment & { user: User };

export type CreateAppointmentDTO = Omit<Appointment, 'id'>;

export interface GetAppointmentsDTO {
  data: AppointmentWithUser[];
  hasMore: boolean;
}
