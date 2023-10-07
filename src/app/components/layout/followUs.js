import Image from "next/image";
import React from "react";

export default function FollowUs() {
  const images = [
    {
      src: "/images/header/instagram.svg",
      alt: "instagram",
    },
    {
      src: "/images/header/facebook.svg",
      alt: "facebook",
    },
    {
      src: "/images/header/twitter.svg",
      alt: "twitter",
    },
  ];
  return (
    <>
      {images.map((image) => {
        return (
          <Image
            key={image.alt}
            src={image.src}
            alt={image.alt}
            width={25}
            height={25}
            className="ml-2"
          />
        );
      })}
    </>
  );
}
