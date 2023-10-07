import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/header/logo.webp"
        alt="logo"
        width={170}
        height={30}
        className="w-[100px] md:w-[100px] lg:w-[170px]"
      />
    </Link>
  );
}
