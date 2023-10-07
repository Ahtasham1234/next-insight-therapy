import Image from "next/image";
import FollowUs from "./followUs";

export default function TopHeader() {
  return (
    <>
      <section className="lg:max-w-[90%]  mx-auto flex justify-between p-2 sm:px-6 lg:px-0 ">
        <div className="md:flex align-middle">
          <div className="bg-[#c8f5e5] flex py-1 px-4 items-center rounded-sm ">
            {" "}
            <Image
              src="/images/header/phone.svg"
              width={12}
              height={12}
              alt="phone"
              className="mr-1"
            />
            <span className="text-sm text-slate-500 mr-1">Call Us: </span>
            <strong className="text-sm"> 888-409-8976</strong>
          </div>
          <div className="md:border-r-2 border-solid border-gray-200 mx-5"></div>
          <div className="text-sm flex items-center text-slate-500 mt-2 md:mt-0">
            Follow Us: <FollowUs />
          </div>
        </div>
        <div className="md:flex ">
          <p className="flex items-center text-sm text-gray-600">
            For Therapists
          </p>
          <div className="md:border-r-2 border-solid border-gray-200 mx-6"></div>

          <p className="flex items-center text-sm text-gray-600">
            For Businesses
          </p>
        </div>
      </section>
      <div className="border-b-2 border-solid border-gray-200 "></div>
    </>
  );
}
