import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Highlight,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  IconLogin,
  IconPassword,
  IconRegister,
  IconUser,
} from '../assets/icons';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>سامانه تیک تینگ</title>
      </Head>
      <Box
        w={360}
        bg="#232A3B"
        color="white"
        h="100%"
        pt={5}
        shadow={'dark-lg'}
        mx="auto"
        textAlign={'center'}
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          borderBottom="1px"
          borderColor="gray.500"
          pb={4}
        >
          <Highlight
            query="تیکتینگ"
            styles={{
              px: '1',
              py: '1',
              bg: 'telegram.500',
              color: 'white',
              mx: '1.9',
              borderRadius: '4',
            }}
          >
            به سامانه تیکتینگ خوش آمدید
          </Highlight>
        </Text>
        <Box
          w="90%"
          h="85%"
          bgColor="brand.800"
          shadow="md"
          mx="auto"
          borderRadius="md"
          mt={8}
          pt={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={20}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            ml={2}
          >
            <Button
              variant="outline"
              fontWeight="400"
              colorScheme="telegram"
              size="lg"
              leftIcon={<IconRegister />}
            >
              ثبت نام
            </Button>
            <Button
              fontWeight="400"
              colorScheme="telegram"
              size="lg"
              rightIcon={<IconLogin />}
            >
              ورود
            </Button>
          </Stack>
          <FormControl px={2} display="flex" flexDirection="column" gap={6}>
            <InputGroup>
              <InputRightElement
                pr={2}
                pointerEvents="none"
                children={<IconUser />}
              />
              <Input
                type="email"
                placeholder="ایمیل"
                _placeholder={{ color: '#848484' }}
                borderColor="brand.900"
                bgColor="brand.900"
                color="#848484"
                pr={10}
                size="lg"
              />
            </InputGroup>
            <InputGroup>
              <InputRightElement
                pr={2}
                pointerEvents="none"
                children={<IconPassword />}
              />
              <Input
                type="email"
                placeholder="رمز عبور"
                _placeholder={{ color: '#848484' }}
                borderColor="brand.900"
                bgColor="brand.900"
                color="#848484"
                pr={10}
                size="lg"
              />
            </InputGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Home;
