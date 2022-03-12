import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Appointment, CreateAppointmentDTO } from '../../../entities';
import { AddAppointmentFormFields } from '../components/AddAppointmentModal';
import {
  generateStartAndEndDates,
  formIsValid,
} from '../helpers/appointments.helpers';

type UseAddAppointmentModalProps = {
  userId: string;
  createAppointment: (appointment: CreateAppointmentDTO) => void;
  onClose: () => void;
};

export function useAddAppointmentModal({
  userId,
  createAppointment,
  onClose,
}: UseAddAppointmentModalProps) {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async data => {
    const formData = data as AddAppointmentFormFields;

    const [startAt, endAt] = generateStartAndEndDates(
      formData.date,
      formData.startTime,
      formData.endTime
    );

    if (!formIsValid(startAt, endAt)) {
      return;
    }

    const appointment: CreateAppointmentDTO = {
      startAt,
      endAt,
      userId,
      type: formData.type,
      notes: formData.notes,
    };

    try {
      await createAppointment(appointment);
      toast.success('Appointment created successfully');

      onClose();
    } catch (e) {}
  });

  return { register, onSubmit };
}
