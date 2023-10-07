import Image from "next/image";

export default function Notification() {
  return (
    <section className="bg-[#18416f] p-2">
      <div className="flex lg:max-w-[90%] mx-auto items-center">
        {" "}
        {/* Added 'items-center' class */}
        <p className="text-[#f9fafb] flex-grow text-center text-sm">
          {" "}
          {/* Added 'flex-grow' class */}
          Sign up for a month-to-month Behavioral Health Coaching, get the first
          month FREE by using code: <strong> WELCOME</strong>
        </p>
        <div className="ml-auto">
          <Image
            src="/images/header/cross.svg"
            width={15}
            height={15}
            alt="close"
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
