import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type HeaderProps = { myText: string };

function Header({ myText }: HeaderProps) {
  return (
    <Flex justifyContent='space-between'>
      <Text size='xl' color='#e50000'>
        {myText}
      </Text>
      <Text size='xl'>Logout</Text>
    </Flex>
  );
}

export default Header;
