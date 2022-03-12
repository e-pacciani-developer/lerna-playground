import { Container, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
const Layout: React.FC = () => {
  return (
    <Container minH={'100vh'} bg="gray.200" minW={'100vw'} padding="0">
      <Header />
      <Flex justify="center" height={'calc(100vh - 80px)'}>
        <Outlet />
      </Flex>
    </Container>
  );
};

export default Layout;
