import { Box, Button, Flex } from '@chakra-ui/react';
import { useHeader } from './useHeader';

const Header: React.VFC = () => {
  const { isAdmin, goToUsersList, goToAppointmentsList, handleLogout } =
    useHeader();

  return (
    <Box bg="facebook.600" w="100%" p={4} color="white" h={'80px'}>
      <Flex justifyContent={isAdmin ? 'space-between' : 'flex-end'}>
        {isAdmin && (
          <>
            <div></div>
            <div>
              <Button
                onClick={goToUsersList}
                colorScheme={'whiteAlpha'}
                mr={'2rem'}
                size={'sm'}
              >
                Users
              </Button>
              <Button
                onClick={goToAppointmentsList}
                colorScheme={'whiteAlpha'}
                size={'sm'}
              >
                Appointments
              </Button>
            </div>
          </>
        )}
        <Button colorScheme={'facebook'} size={'sm'} onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
