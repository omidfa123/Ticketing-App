import {
  Box,
  Button,
  FormControl,
  Highlight,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import ReCAPTCHA from 'react-google-recaptcha';
import Head from 'next/head';
import {
  IconeEye,
  IconEmail,
  IconEyeInvisible,
  IconLogin,
  IconPassword,
  IconRegister,
} from '../assets/icons';
import { useState } from 'react';
import { useRouter } from 'next/router';
const Home: NextPage = () => {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //
  const resetState = () => {
    setShowConfirmPassword(false);
    setShowPassword(false);
    setShowPassword(false);
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  return (
    <>
      <Head>
        <title>سامانه تیک تینگ</title>
      </Head>
      <Box
        w={360}
        bg="#232A3B"
        color="white"
        h="max-content"
        py={8}
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
            query={['تیکتینگ']}
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
          h="max-content"
          bgColor="brand.800"
          shadow="md"
          mx="auto"
          borderRadius="md"
          mt={8}
          py={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={isRegistering ? 10 : 20}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            ml={2}
          >
            <Button
              variant={isRegistering ? 'solid' : 'outline'}
              fontWeight="400"
              colorScheme="telegram"
              size="lg"
              leftIcon={<IconRegister />}
              _hover={!isRegistering ? { bg: 'brand.900' } : {}}
              _active={!isRegistering ? { bg: 'brand.900' } : {}}
              onClick={() => {
                setIsRegistering(true);
                resetState();
              }}
            >
              ثبت نام
            </Button>
            <Button
              fontWeight="400"
              colorScheme="telegram"
              size="lg"
              rightIcon={<IconLogin />}
              _hover={isRegistering ? { bg: 'brand.900' } : {}}
              _active={isRegistering ? { bg: 'brand.900' } : {}}
              variant={isRegistering ? 'outline' : 'solid'}
              onClick={() => {
                setIsRegistering(false);
                resetState();
              }}
            >
              ورود
            </Button>
          </Stack>
          <Box px={2} display="flex" flexDirection="column" gap={6}>
            <FormControl>
              <InputGroup>
                <InputRightElement
                  pr={2}
                  top="4px"
                  pointerEvents="none"
                  children={<IconEmail />}
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <InputRightElement
                  pr={2}
                  top="4px"
                  pointerEvents="none"
                  children={<IconPassword />}
                />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="رمز عبور"
                  _placeholder={{ color: '#848484' }}
                  borderColor="brand.900"
                  bgColor="brand.900"
                  color="#848484"
                  pr={10}
                  size="lg"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <InputLeftElement
                  top="4px"
                  cursor="pointer"
                  onClick={() =>
                    showPassword
                      ? setShowPassword(false)
                      : setShowPassword(true)
                  }
                >
                  {password.length === 0 ? (
                    ''
                  ) : showPassword ? (
                    <IconeEye />
                  ) : (
                    <IconEyeInvisible />
                  )}
                </InputLeftElement>
              </InputGroup>
            </FormControl>
            {isRegistering && (
              <FormControl>
                <InputGroup
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <InputRightElement
                    pr={2}
                    top="4px"
                    pointerEvents="none"
                    children={<IconPassword />}
                  />
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="تکرار رمز عبور"
                    _placeholder={{ color: '#848484' }}
                    borderColor="brand.900"
                    bgColor="brand.900"
                    color="#848484"
                    pr={10}
                    size="lg"
                    value={passwordConfirm}
                    onChange={e => setPasswordConfirm(e.target.value)}
                  />
                  <InputLeftElement
                    top="4px"
                    cursor="pointer"
                    onClick={() =>
                      showConfirmPassword
                        ? setShowConfirmPassword(false)
                        : setShowConfirmPassword(true)
                    }
                  >
                    {passwordConfirm.length === 0 ? (
                      ''
                    ) : showConfirmPassword ? (
                      <IconeEye />
                    ) : (
                      <IconEyeInvisible />
                    )}
                  </InputLeftElement>
                </InputGroup>
              </FormControl>
            )}
            <Box mt={4}>
              <ReCAPTCHA
                size="normal"
                sitekey="6Ld-MfggAAAAAIMbe-YePd6XQeqW48sTXlcuZJOm"
                hl="fa"
              />
            </Box>
            <Button
              size="lg"
              mt={8}
              colorScheme="telegram"
              onClick={() => {
                router.push('/Ticketing');
              }}
            >
              {isRegistering ? 'ثبت‌نام' : 'ورود'}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
