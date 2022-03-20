import { useDisclosure } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Appointment } from '../../../entities';
import { getAppointmentsMapByPeriod } from '../helpers/appointments.helpers';

type UseAppointmentListProps = {
  appointments: Appointment[];
};

export function useAppointmentsList({ appointments }: UseAppointmentListProps) {
  const [appointmentsMap, setAppointmentMap] = useState(
    new Map<string, Appointment[]>()
  );

  useEffect(() => {
    const appointmentsMap = getAppointmentsMapByPeriod(appointments);

    setAppointmentMap(appointmentsMap);
  }, [appointments]);

  const {
    isOpen: addAppointmentIsOpen,
    onOpen: onAddAppointmentOpen,
    onClose: onAddAppointmentClose,
  } = useDisclosure();

  return {
    appointmentsMap,
    addAppointmentIsOpen,
    onAddAppointmentOpen,
    onAddAppointmentClose,
  };
}
