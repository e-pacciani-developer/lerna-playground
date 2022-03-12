import { Text, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Layout from '../../components/Layout';
import AppointmentsList from './components/AppointmentList';
import { useAppointmentsPage } from './hooks/useAppointmentsPage';

const Appointments = () => {
  const { appointments, user, createAppointment, cancelAppointment } =
    useAppointmentsPage();

  return (
    <VStack>
      <Text fontSize={'2xl'} marginBottom="2rem">
        Welcome back, {user?.name}
      </Text>
      {appointments && (
        <AppointmentsList
          appointments={appointments}
          userId={user?.id || ''}
          createAppointment={createAppointment}
          cancelAppointment={cancelAppointment}
        ></AppointmentsList>
      )}
    </VStack>
  );
};

Appointments.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Appointments;
