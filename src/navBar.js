/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Icon} from '@iconify/react';
import shoppingCart from '@iconify-icons/carbon/shopping-cart';


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white">
{/* Inicio vista de escritorio */}
        <div className="max-w-full">
          <div className="flex items-center justify-between h-16">
            <div className="xl:grid xl:grid-cols-5 flex justify-between items-center w-full">
              {/* Iniicio boton de hamburgesa */}
            <div className="mr-2 flex xl:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 "
                aria-controls="mobile-menu"
                aria-expanded="false"
                >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                    <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                      />
                  </svg>
                ) : (
                    <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                      />
                  </svg>
                )}
              </button>
            </div>
{/* Fin boton de hamburgesa */}
              {/* Logo */}
              <div className="flex-shrink-0 ml-14">
                <img
                  className="md:w-tw w-ml"
                  src="https://cdn.shopify.com/s/files/1/0094/2299/5553/files/Untitled_design_3_10a78c81-e02a-4c06-8dd8-f89b0e6bad61_400x.png?v=1605049599"
                  alt="Workflow"
                />
              </div>
              <div className="hidden xl:block xl:col-span-3">
                <div className="ml-10 flex items-baseline space-x-4 ">
                  <a
                    href="#"
                    className="text-black hover:border-b-2  hover:border-black hover:rounded-none px-3 py-2 text-sm font-medium"
                  >
                    READY TO SHIP
                  </a>

                  <a
                    href="#"
                    className="text-black hover:border-b-2  hover:border-black hover:rounded-none px-3 py-2 text-sm font-medium"
                  >
                    NEW
                  </a>

                  <a
                    href="#"
                    className="text-black hover:border-b-2  hover:border-black hover:rounded-none px-3 py-2 text-sm font-medium"
                  >
                    JEWELRY
                  </a>

                  <a
                    href="#"
                    className="text-black hover:border-b-2  hover:border-black hover:rounded-none px-3 py-2 text-sm font-medium"
                  >
                    COLLECTIONS
                  </a>

                  <a
                    href="#"
                    className="text-black hover:border-b-2  hover:border-black hover:rounded-none px-3 py-2 text-sm font-medium"
                  >
                    SIZING GUIDE
                  </a>
                  <a
                    href="#"
                    className="text-black hover:border-b-2  hover:border-black hover:rounded-none px-3 py-2 text-sm font-medium"
                  >
                    ABOUT
                  </a>
                </div>
              </div>
                <div className="flex items-center xl:justify-end space-x-1 mr-4">
                  <p className="md:block hidden">My Cart</p>
                  <Icon icon={shoppingCart} />
                  <p>1</p>
                </div>
            </div>
          </div>
        </div>
{/* Fin de vista de scritorio */}

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="xl:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  READY TO SHIP
                </a>

                <a
                  href="#"
                  className="text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  NEW
                </a>

                <a
                  href="#"
                  className="text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  JEWELRY
                </a>

                <a
                  href="#"
                  className="text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  COLLECTIONS
                </a>

                <a
                  href="#"
                  className="text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  SIZING GUIDE
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  ABOUT
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;