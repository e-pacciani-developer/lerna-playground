import { useCallback, useEffect, useState } from 'react';
import { Appointment, CreateAppointmentDTO } from './appointment.model';
import { appointmentsService } from './appointments.service';

export function useAppointments(userId: string) {
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);

  useEffect(() => {
    if (userId) {
      appointmentsService
        .getUserAppointments(1, 20, userId)
        .then(resp => setAppointments(resp.data));
    }
  }, [userId]);

  const createAppointment = useCallback(
    async (appointment: CreateAppointmentDTO) => {
      await appointmentsService.createAppointment(appointment);

      const appointments = await appointmentsService.getUserAppointments(
        1,
        20,
        userId
      );

      setAppointments(appointments.data);
    },
    [userId]
  );

  const cancelAppointment = useCallback(
    async (appointment: Appointment) => {
      await appointmentsService.deleteAppointment(appointment.id);

      const appointments = await appointmentsService.getUserAppointments(
        1,
        20,
        userId
      );

      setAppointments(appointments.data);
    },
    [userId]
  );

  return { appointments, createAppointment, cancelAppointment };
}
