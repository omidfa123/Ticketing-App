import type { NextPage } from 'next';
import Head from 'next/head';

const Land: NextPage = () => {
  return (
    <>
      <Head>
        <title>به سامانه تیک تینگ خوش امدید</title>
      </Head>
      <div className="container  mx-auto w-[360px] h-full  shadow-lg rounded-sm text-white  bg-[#232A3B]   ">
        <header className=" border-b-2  border-[#313A55]">
          <div className="flex items-center justify-start pb-4 px-4 py-4 gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 18H9V16H21V18ZM21 13H3V11H21V13ZM21 8H9V6H21V8Z"
                fill="#F8F8F8"
              />
            </svg>
            <p>پشتیبانی</p>
          </div>
        </header>
        <main className=" flex  items-cflex-colenter h-[93%]    w-full p-4">
          <div className="bg-[#293145] w-full h-[100%] p-4  shadow-sm   rounded-md  ">
            <div className="flex justify-between items-center border-b border-[#313A55]">
              <div className="relative">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.79167 6.91667V10.5625C2.79167 10.635 2.77667 10.7067 2.7475 10.7729L1.59917 13.375H14.4008L13.2529 10.7729C13.2236 10.7066 13.2084 10.635 13.2083 10.5625V6.91667C13.2083 4.04 10.8767 1.70834 8 1.70834C5.12375 1.70834 2.79167 4.04 2.79167 6.91667ZM5.5 14.4167H1.43917C1.28322 14.4166 1.12974 14.3777 0.99264 14.3034C0.85554 14.229 0.739146 14.1217 0.654 13.991C0.568855 13.8604 0.517648 13.7105 0.505018 13.5551C0.492388 13.3997 0.518733 13.2435 0.581668 13.1008L1.75 10.4529V6.91667C1.75 3.465 4.54833 0.666672 8 0.666672C11.4517 0.666672 14.25 3.465 14.25 6.91667V10.4525L15.4183 13.1008C15.4813 13.2435 15.5076 13.3997 15.495 13.5551C15.4824 13.7105 15.4311 13.8604 15.346 13.991C15.2609 14.1217 15.1445 14.229 15.0074 14.3034C14.8703 14.3777 14.7168 14.4166 14.5608 14.4167H10.5V14.8333C10.5 15.4964 10.2366 16.1323 9.76777 16.6011C9.29893 17.0699 8.66304 17.3333 8 17.3333C7.33696 17.3333 6.70107 17.0699 6.23223 16.6011C5.76339 16.1323 5.5 15.4964 5.5 14.8333V14.4167ZM9.45833 14.4167H6.54167V14.8333C6.54167 15.2201 6.69531 15.591 6.9688 15.8645C7.24229 16.138 7.61323 16.2917 8 16.2917C8.38678 16.2917 8.75771 16.138 9.0312 15.8645C9.30469 15.591 9.45833 15.2201 9.45833 14.8333V14.4167Z"
                    fill="#F8F8F8"
                  />
                </svg>
                <div className="bg-red-600 w-[12px] h-[12px] rounded-full flex items-end justify-center absolute -top-1 -right-1">
                  <span className="text-[6px]">2</span>
                </div>
              </div>
              <p className="text-[12px]">تعداد پشتیبان آنلاین : ۸ نفر</p>
            </div>
            <p>لیست درخواست ایجاد شده</p>
          </div>
        </main>
      </div>
    </>
  );
};
export default Land;
