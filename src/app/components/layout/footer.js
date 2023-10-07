import React from "react";
import Logo from "./logo";
import FollowUs from "./followUs";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9ff] text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left  w-full">
      <div className="lg:max-w-[90%] mx-auto">
        <div className=" mx-6 lg:mx-auto py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <div className="flex justify-center md:justify-start">
                <Logo />
              </div>
              <div className="mt-10">
                <p className="text-slate-500">Technical Support: </p>
                <p className="text-[#e05697]">888-409-8976</p>
              </div>
              <div className="mt-4">
                <p className="text-slate-500"> Email Us: </p>
                <p className="text-[#e05697]">team@insight.com</p>
              </div>
              <div className="mt-4">
                <p className="text-slate-500"> Customer Support: </p>
                <p className="text-[#e05697]">team@insight.com</p>
              </div>
              <div className="mt-4">
                <p className="text-slate-500"> Email Us:: </p>
                <p className="text-[#e05697]">team@insight.com</p>
              </div>
              <div className="mt-4">
                <p className="text-slate-500"> Customer Support: </p>
                <p className="text-[#e05697]">Emergency Resources</p>
              </div>
              <div className="mt-4">
                <p className="text-slate-500">Follow Us: </p>
                <div className="flex justify-center md:justify-start mt-4">
                  {" "}
                  <FollowUs />
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="mb-4 flex justify-center font-semibold  md:justify-start text-2xl">
                Services
              </h1>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Anger Management Therapy
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Anxiety Therapy
                </Link>
              </p>

              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Children&apos;s Therapy
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Couples Therapy
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Depression Therapy
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Elderly Therapy
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  ASL Therapy
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Family Therapy
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Grief and Trauma Therapy
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Telehealth Counseling
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Match Making Services
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Group Therapy
                </Link>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold text-2xl md:justify-start">
                Company
              </h6>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Find a Therapist
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Free Mental Health Tests
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Insurance Coverage
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Emergency Resources
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  For Therapists
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  For Businesses
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Privacy Policy
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Terms and Conditions
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Accessibility
                </Link>
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold text-2xl md:justify-start">
                About
              </h6>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  About Us
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Our Clinics
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Our Team
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  FAQs
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Blogs
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Capability Statement
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/" className="text-slate-500">
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#edebf4] py-4  ">
        <div className="lg:max-w-[90%] mx-auto lg:flex justify-between">
          <div className="md:flex items-start">
            <Image
              src="/images/footer/alert.webp"
              alt="alert"
              width={25}
              height={25}
              className="md:mr-3 mx-auto"
            />
            <p className="text-slate-500">
              {" "}
              If you are in a life threatening situation - don&apos;t use this
              site.
            </p>
            <p className="text-[#e05697] ml-1">
              Call emergency to get immediate help.
            </p>
          </div>
          <div>
            <span className="text-slate-500 text-center">
              {" "}
              All rights reserved © 2023{" "}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
