import { useAtom } from 'jotai';
import { useParams } from 'react-router-dom';
import { useAppointments } from '../../../entities';
import { currentUserAtom } from '../../../store';

export function useAppointmentsPage() {
  const { userId } = useParams();
  const { appointments, createAppointment, cancelAppointment } =
    useAppointments(userId || '');
  const [user] = useAtom(currentUserAtom);

  return { appointments, user, createAppointment, cancelAppointment };
}
