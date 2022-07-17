import { NextPage } from 'next';
import Head from 'next/head';

const Chat: NextPage = () => {
  return (
    <>
      <Head>
        <title>چت کردن با پشتیبان</title>
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
        <main className=" flex flex-col items-center h-[90%]    w-full p-4">
          <div className="bg-[#293145] w-full  shadow-sm   rounded-md  ">
            <div className="p-3 flex flex-col  ">
              <div className="text-[13px]">
                <span className="pl-2 text-[#AAAAAA]">موضوع درخواست :</span>
                <span>خرید بیت کوین</span>
              </div>
              <div className="p-3"></div>
              <div className="w-[75%] bg-[#313A56]     text-[10px] rounded-[4px] ">
                <div className="border-b border-[#666971] pb-2 px-3 py-2">
                  <p className="text-[#AAAAAA]">رضا مردانی</p>
                  <p className="text-[#AAAAAA]">۱۴۰۱/۰۶/۰۵ - ۱۴:۲۷</p>
                </div>
                <div className="p-1"></div>
                <div className="pb-3 px-3 ">
                  <p className="leading-relaxed text-[13px]">
                    سلام . من دیروز یه سفارش ثبت کردم ولی هنوز تایید نشده . لطفا
                    پیگیری کنید . ممنون
                  </p>
                </div>
              </div>
              <div className="p-3"></div>
              <div className="w-[75%] bg-[#22469C] mr-auto  text-[10px] rounded-[4px] ">
                <div className="border-b border-[#666971] pb-2 px-3 py-2">
                  <p className="text-[#BEBEBE]">احمد ایرانی - پشتیبان</p>
                  <p className="text-[#BEBEBE]">۱۴۰۱/۰۶/۰۵ - ۱۴:۲۷</p>
                </div>
                <div className="p-1"></div>
                <div className="pb-3 px-3 ">
                  <p className="leading-relaxed text-[13px]">
                    سلام . حداکثر تا امشب تایید میشه . با تشکر از شکیبایی شما
                  </p>
                </div>
              </div>
              <div className="p-3"></div>
              <div className="w-[75%] bg-[#313A56]    text-[10px] rounded-[4px] ">
                <div className="border-b border-[#666971] pb-2 px-3 py-2">
                  <p className="text-[#AAAAAA]">رضا مردانی</p>
                  <p className="text-[#AAAAAA]">۱۴۰۱/۰۶/۰۵ - ۱۴:۲۷</p>
                </div>
                <div className="p-1"></div>
                <div className="pb-3 px-3 ">
                  <p className="leading-relaxed text-[13px]">
                    ممنون . منتظر می‌مونم .
                  </p>
                </div>
              </div>
              <div className="p-3"></div>
              <div className="w-[75%] bg-[#22469C] mr-auto  text-[10px] rounded-[4px] ">
                <div className="border-b border-[#666971] pb-2 px-3 py-2">
                  <p className="text-[#BEBEBE]">احمد ایرانی - پشتیبان</p>
                  <p className="text-[#BEBEBE]">۱۴۰۱/۰۶/۰۵ - ۱۴:۲۷</p>
                </div>
                <div className="p-1"></div>
                <div className="pb-3 px-3 ">
                  <p className="leading-relaxed text-[13px]">
                    سلام . حداکثر تا امشب تایید میشه . با تشکر از شکیبایی شما
                  </p>
                </div>
              </div>
              <div className="p-2"></div>
            </div>
            <div>
              <form className="text-[#848484] border-t border-[#313A55] h-[5rem] relative  ">
                <textarea
                  className="w-full resize-none p-3 outline-none  bg-[#293145] border-[#666971] rounded-md"
                  placeholder="پیام خود را تایپ کنید..."
                />
                <button className=" absolute  outline-none   rounded-md bottom-3 left-3 ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#2352C3" />
                    <path
                      d="M18.336 5.68126C18.2515 5.5973 18.1448 5.53918 18.0284 5.51371C17.912 5.48825 17.7908 5.4965 17.6789 5.53751L3.91297 10.5375C3.79425 10.5825 3.69204 10.6625 3.61991 10.7669C3.54778 10.8712 3.50916 10.9951 3.50916 11.1219C3.50916 11.2487 3.54778 11.3725 3.61991 11.4769C3.69204 11.5813 3.79425 11.6613 3.91297 11.7063L9.28796 13.85L13.2551 9.87501L14.1373 10.7563L10.1515 14.7375L12.304 20.1063C12.3503 20.2225 12.4306 20.3223 12.5343 20.3925C12.6381 20.4627 12.7606 20.5001 12.8859 20.5C13.0123 20.4974 13.135 20.4566 13.2378 20.383C13.3406 20.3093 13.4186 20.2063 13.4615 20.0875L18.4674 6.33751C18.51 6.22693 18.5203 6.10653 18.497 5.99034C18.4737 5.87414 18.4179 5.76695 18.336 5.68126Z"
                      fill="#F8F8F8"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Chat;
