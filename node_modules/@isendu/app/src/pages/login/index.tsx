import {
  Box,
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { useLogin } from './hooks/useLogin';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LoginPage: React.VFC = () => {
  const { users, signInAs, signInAfterSignUp } = useLogin();

  return (
    <Container minH={'100%'} bg="gray.200" minW={'100%'} padding="0">
      <Flex justify="center" align="center" height={'100vh'}>
        <Box
          width={['100%', '70%', '30rem']}
          borderWidth="1px"
          borderRadius="lg"
          padding={'2rem'}
          shadow="md"
          bg="white"
        >
          <Text
            marginBottom={'1rem'}
            fontSize={'3xl'}
            fontWeight="bold"
            textAlign={'center'}
          >
            Welcome
          </Text>
          <Tabs>
            <TabList>
              <Tab>Sign In</Tab>
              <Tab>Sign Up</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SignIn users={users} signInAs={signInAs} />
              </TabPanel>
              <TabPanel>
                <SignUp signInAfterSignUp={signInAfterSignUp} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Container>
  );
};

export default LoginPage;
