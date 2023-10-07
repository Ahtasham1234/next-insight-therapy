"use client";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="lg:max-w-[90%] mx-auto">
      <nav
        className="mx-auto flex items-center justify-between px-2 sm:px-6 lg:px-0  py-3 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden  lg:justify-end">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex  lg:gap-x-6 lg:items-center">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-slate-500"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-slate-500"
          >
            Insurance & Payment
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-slate-500"
          >
            Resources
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-slate-500"
          >
            Careers
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-slate-500"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-[#e05697]"
          >
            Log in
          </Link>
          <button className="bg-[#e05697] text-white px-3 py-2 rounded-lg">
            Free Consultation
          </button>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:text-slate-500/10 bg-[#faf9ff]">
          <div className="flex items-center justify-between">
            {/* <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link> */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-500 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-500 hover:bg-gray-50"
                >
                  Insurance & Payment
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-500 hover:bg-gray-50"
                >
                  Resources
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-slate-500"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-slate-500"
                >
                  Contact Us
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#e05697] hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
