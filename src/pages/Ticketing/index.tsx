import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  IconBell,
  IconDownArrow,
  IconLeftArrow,
  IconLeftArrowDouble,
  IconMenu,
  IconRightArrow,
  IconRightArrowDouble,
} from '../../assets/icons';

const Ticketing: NextPage = () => {
  return (
    <>
      <Head>
        <title>به سامانه تیکتینگ خوش آمدید</title>
      </Head>
      <Box
        w={360}
        h="99vh"
        bg="#232A3B"
        color="white"
        shadow={'dark-lg'}
        mx="auto"
        pos={'relative'}
        overflow={'hidden'}
      >
        <Box pr={6} display={'flex'} alignItems="center" gap={2} py={2}>
          <IconMenu />
          <Text>پشتیبانی</Text>
        </Box>
        <Divider />
        <Box
          w="90%"
          h="94%"
          bgColor="#293145"
          shadow="md"
          mx="auto"
          borderRadius="md"
          my={3}
          display={'flex'}
          flexDirection={'column'}
          p={3}
        >
          <Box
            pos={'relative'}
            pb={2}
            display="flex"
            justifyContent="space-between"
          >
            <Badge
              pos="absolute"
              bg="red.500"
              color="white"
              borderRadius="full"
              w="13px"
              h="13px"
              display={'flex'}
              justifyContent="center"
              top={'-4px'}
            >
              ۲
            </Badge>
            <IconBell />

            <Text fontSize="sm">تعداد پشتیبان آنلاین :۳ نفر</Text>
          </Box>
          <Divider />
          <Box py={4} fontSize="sm">
            <Text>لیست درخواست های ایجاد شده</Text>
          </Box>
          <Box overflow={'scroll'} overflowY="hidden">
            <Box width="787px" pt={2} top="20%">
              <Flex
                fontSize="sm"
                justify="space-between"
                borderBottom="1px"
                borderBottomColor="gray.500"
                px={4}
                pb={2}
                mb={4}
              >
                <Text>موضوع</Text>
                <Text pr={6}>واحد پشتیبانی</Text>
                <Text>وضعیت</Text>
                <Text>مشاهده</Text>
              </Flex>

              <Flex
                px={4}
                mb={4}
                mx={1}
                alignItems="center"
                justifyContent="space-between"
                bgColor="brand.800"
                h="40px"
                borderRadius="8px"
                pos={'relative'}
              >
                <Link href="#" color="#EBBA07" fontSize="sm">
                  پیگیری سفارش
                </Link>
                <Text fontSize="sm" pl={4}>
                  سفارشات
                </Text>
                <Badge
                  bg="#122640"
                  color="white"
                  fontSize="small"
                  fontWeight={'normal'}
                  borderRadius="full"
                >
                  بسته شده
                </Badge>
                <Link href="#" color="#EBBA07" fontSize="sm">
                  مشاهده
                </Link>
                <Divider
                  orientation="vertical"
                  color={'gray.500'}
                  h={'70%'}
                  pos="absolute"
                  left={'10%'}
                />
              </Flex>
              <Flex
                px={4}
                mb={4}
                mx={1}
                alignItems="center"
                justifyContent="space-between"
                bgColor="brand.800"
                h="40px"
                borderRadius="8px"
                pos={'relative'}
              >
                <Link href="#" color="#EBBA07" fontSize="sm">
                  پیگیری سفارش
                </Link>
                <Text fontSize="sm" pl={4}>
                  سفارشات
                </Text>
                <Badge
                  bg="#122640"
                  color="white"
                  fontSize="small"
                  fontWeight={'normal'}
                  borderRadius="full"
                >
                  بسته شده
                </Badge>
                <Link href="#" color="#EBBA07" fontSize="sm">
                  مشاهده
                </Link>
                <Divider
                  orientation="vertical"
                  color={'gray.500'}
                  h={'70%'}
                  pos="absolute"
                  left={'10%'}
                />
              </Flex>
            </Box>
          </Box>
          <Flex alignItems="center" justifyContent="center" py={4}>
            <IconRightArrowDouble />
            <IconRightArrow />
            <Text mx={6} mr={7}>
              ۲
            </Text>
            <IconLeftArrow />
            <IconLeftArrowDouble />
          </Flex>
          <Box
            bg="brand.800"
            p={4}
            display="flex"
            flexDirection="column"
            gap={3}
            borderRadius="8px"
          >
            <Text fontSize="large">ثبت درخواست پشتیبانی</Text>
            <FormControl>
              <FormLabel fontSize="sm" htmlFor="topic">
                موضوع
              </FormLabel>
              <Input
                fontSize="sm"
                type="text"
                placeholder="موضوع خود را درج کنید"
                _placeholder={{ color: '#848484' }}
                borderColor="brand.900"
                bgColor="brand.900"
                color="#848484"
              />
            </FormControl>
            <FormControl pos="relative">
              <FormLabel htmlFor="backup" fontSize="sm">
                واحد پشتیبانی
              </FormLabel>
              <Box pos="absolute" top="62%" left="0.8rem" zIndex="banner">
                <IconDownArrow />
              </Box>
              <Select
                icon={<IconDownArrow visibility="hide" />}
                iconSize={'sm'}
                fontSize="sm"
                borderColor="brand.900"
                color="#848484"
                bgColor="brand.900"
              >
                <option
                  style={{
                    backgroundColor: '#232A3B',
                    borderBottom: '1px',
                    borderColor: '#848484',
                  }}
                >
                  واحد فروش
                </option>
                <option
                  style={{
                    backgroundColor: '#232A3B',
                    borderBottom: '1px',
                    borderColor: '#848484',
                  }}
                >
                  واحد فنی
                </option>
                <option
                  style={{
                    backgroundColor: '#232A3B',
                    borderBottom: '1px',
                    borderColor: '#848484',
                  }}
                >
                  واحد مالی
                </option>
                <option
                  style={{
                    backgroundColor: '#232A3B',
                    borderBottom: '1px',
                    borderColor: '#848484',
                  }}
                >
                  مدیریت
                </option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="text" fontSize="sm">
                توضیحات
              </FormLabel>
              <Textarea
                fontSize="sm"
                placeholder="توضیحات خود را درج کنید"
                _placeholder={{ color: '#848484' }}
                borderColor="brand.900"
                bgColor="brand.900"
                color="#848484"
                size="lg"
                resize={'none'}
              />
            </FormControl>

            <Button size="md" colorScheme="telegram">
              ثبت درخواست
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Ticketing;
