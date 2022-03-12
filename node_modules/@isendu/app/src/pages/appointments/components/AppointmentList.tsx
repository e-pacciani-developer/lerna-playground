import { Box, Button, Flex, List, Text } from '@chakra-ui/react';
import { Appointment, CreateAppointmentDTO } from '../../../entities';
import { getPeriodTitle } from '../helpers/appointments.helpers';
import { useAppointmentsList } from '../hooks/useAppointmentsList';
import AddAppointmentModal from './AddAppointmentModal';
import AppointmentsForPeriod from './AppointmentForPeriod';

interface AppointmentsListProps {
  appointments: Appointment[];
  userId: string;
  createAppointment: (appointment: CreateAppointmentDTO) => void;
  cancelAppointment: (appointment: Appointment) => void;
}

const AppointmentsList: React.VFC<AppointmentsListProps> = ({
  appointments,
  userId,
  createAppointment,
  cancelAppointment,
}) => {
  const {
    appointmentsMap,
    addAppointmentIsOpen,
    onAddAppointmentOpen,
    onAddAppointmentClose,
  } = useAppointmentsList({ appointments });

  return (
    <>
      <Button
        onClick={onAddAppointmentOpen}
        w="100%"
        colorScheme="facebook"
        size="lg"
      >
        Add Appointment
      </Button>
      <Box
        width={['100%', '70%', '30rem']}
        borderWidth="1px"
        borderRadius="lg"
        padding={'1rem 2rem'}
        bg="white"
        overflow={'auto'}
        style={{ marginBottom: '2rem' }}
      >
        <Flex flexDirection="column">
          <Text fontSize={'3xl'}>My Appointments</Text>
          <hr />
          <List marginTop={'1rem'}>
            {Array.from(appointmentsMap.entries()).map(
              ([period, appointments]) => (
                <AppointmentsForPeriod
                  key={period}
                  periodTitle={getPeriodTitle(period)}
                  appointments={appointments}
                  cancelAppointment={cancelAppointment}
                />
              )
            )}
          </List>
        </Flex>
      </Box>
      <AddAppointmentModal
        isOpen={addAppointmentIsOpen}
        onClose={onAddAppointmentClose}
        createAppointment={createAppointment}
        userId={userId}
      />
    </>
  );
};

export default AppointmentsList;
