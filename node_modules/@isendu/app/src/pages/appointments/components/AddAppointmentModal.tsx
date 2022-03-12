import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { VisitTypes } from '../../../constants/visit-type';
import { CreateAppointmentDTO } from '../../../entities';
import { setCurrentDate } from '../helpers/appointments.helpers';
import { useAddAppointmentModal } from '../hooks/useAddAppointmentModal';

interface AddAppointmentProps {
  isOpen: boolean;
  onClose: () => void;
  createAppointment: (appointment: CreateAppointmentDTO) => void;
  userId: string;
}

export interface AddAppointmentFormFields {
  date: string;
  startTime: string;
  endTime: string;
  type: string;
  notes: string;
}

const AddAppointmentModal: React.VFC<AddAppointmentProps> = ({
  isOpen,
  onClose,
  createAppointment,
  userId,
}) => {
  const { register, onSubmit } = useAddAppointmentModal({
    userId,
    createAppointment,
    onClose,
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Appointment</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={onSubmit}>
          <ModalBody>
            <VStack>
              <FormControl>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input
                  id="date"
                  defaultValue={setCurrentDate()}
                  {...register('date', { required: true })}
                  type="date"
                />
              </FormControl>

              <Flex w="100%" gap="0.5rem">
                <FormControl>
                  <FormLabel htmlFor="startTime">From</FormLabel>
                  <Input
                    {...register('startTime', { required: true })}
                    type="time"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="endTime">To</FormLabel>
                  <Input
                    {...register('endTime', { required: true })}
                    type="time"
                  />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel htmlFor="type">Type</FormLabel>
                <Select
                  defaultValue="Teeth Cleaning"
                  {...register('type', { required: true })}
                >
                  {VisitTypes.map((type, i) => (
                    <option key={i}>{type}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="desciption">Notes</FormLabel>
                <Textarea
                  {...register('notes')}
                  placeholder="Insert notes here if you want to add any detail"
                  rows={5}
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              colorScheme="red"
              mr={3}
              onClick={onClose}
              size="sm"
            >
              Close
            </Button>
            <Button colorScheme={'blue'} size="sm" type="submit">
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default React.memo(AddAppointmentModal);
