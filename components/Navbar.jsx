import React, { useState , useContext} from "react"
import { Transition } from "@headlessui/react"
import Link from "next/link"
import { useRouter } from "next/router"
// import Image from "next/image"
import { stateContext } from "../components/Layout";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();
  const {connectWallet, connected,mintPage} = useContext(stateContext);
  const buttonHandler = () => {
    router.push("/Mint")
  }

  return (
    <div className="text-white max-w-7xl bg-black">
      <nav className="shadow-sm w-full  z-10 bg-black">
        <div className="w-full ">
          <div className="flex items-center h-20 w-full md:bg-[#393939] bg-opacity-50  top-0 z-50 md:fixed ">
            <div className="flex items-center  mx-10  justify-between w-full md:bg-[#393939] bg-opacity-50">
              <div className="flex justify-center items-center flex-shrink-0 md:bg-[#393939] bg-opacity-50">
                <Link href="/">
                  <a className="font-bold text-xl cursor-pointer md:bg-[#393939] bg-opacity-50">
                    Aliens On Earth
                  </a>
                </Link>
              </div>
              <div className="hidden md:block md:bg-[#393939] ">
                <div className="ml-10 flex items-baseline space-x-4  md:bg-[#393939]">
                  <Link href="#team" smooth={true} offset={50} duration={500}>
                    <a className="cursor-pointer px-3 py-2 text-md scroll-smooth hover:font-black md:hover:text-[#FFB800] md:bg-[#393939]">
                      Team
                    </a>
                  </Link>
                  <Link href="#ourstory">
                    <a className="cursor-pointer px-3 py-2 text-md hover:font-black md:hover:text-[#FFB800] md:bg-[#393939]">
                      Our Story
                    </a>
                  </Link>
                  <Link href="#faqs" smooth={true} offset={50} duration={500}>
                    <a className="cursor-pointer px-3 py-2 text-md hover:font-black scroll-smooth md:hover:text-[#FFB800] md:bg-[#393939]">
                      FAQ's
                    </a>
                  </Link>

                  <Link
                    href="#roadmap"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer px-3 py-2 text-md hover:font-black md:hover:text-[#FFB800] md:bg-[#393939]">
                      Roadmap
                    </a>
                  </Link>

                  {/* <Link
                    activeClass="contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-black px-3 py-2 rounded-md text-md font-medium"
                  >
                    Mint now
                  </Link> */}
                  {
                    !mintPage ? 
                    <button
                      onClick={buttonHandler}
                      className=" cursor-pointer px-3 py-2 text-md text-white bg-gradient-to-r from-[#FD7900] to-[#FFE600] rounded font-bold hover:scale-110 hover:text-black md:bg-[#393939]"
                    >
                      Mint Now
                    </button>
                    :
                    <div>
                      {
                      connected == true? 
                      <button
                      className=" cursor-pointer px-3 py-2 text-md text-white bg-gradient-to-r from-[#FD7900] to-[#FFE600] rounded font-bold hover:scale-110 hover:text-black md:bg-[#393939]"
                      >
                       connected
                      </button>
                      :
                      <button
                      onClick={connectWallet}
                      className=" cursor-pointer px-3 py-2 text-md text-white bg-gradient-to-r from-[#FD7900] to-[#FFE600] rounded font-bold hover:scale-110 hover:text-black md:bg-[#393939]"
                      >
                        Connect Wallet
                      </button>

                      }
                      </div>
                  }

                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
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
          </div>
        </div>

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
            <div className="md:hidden mx-6 " id="mobile-menu">
              <div
                ref={ref}
                className=" px-2 pt-2 pb-3 space-y-1 sm:px-3 border rounded-2xl"
              >
                <Link href="#team">
                  <a className="cursor-pointer hover:bg-[#FFB800] hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                    Team
                  </a>
                </Link>
                <Link href="#ourstory">
                  <a className="cursor-pointer hover:bg-[#FFB800]  hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                    Our Story
                  </a>
                </Link>

                <Link href="#faqs">
                  <a className="cursor-pointer hover:bg-[#FFB800]  hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                    FAQs
                  </a>
                </Link>
                <Link href="#roadmap">
                  <a className="cursor-pointer hover:bg-[#FFB800]  hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                    Roadmap
                  </a>
                </Link>

                {/*  <Link
                  href="/contact"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-[#FFB800]  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Mint now
                </Link> */}
                {
                    !mintPage ? 
                    <button
                      onClick={buttonHandler}
                      className=" cursor-pointer px-3 py-2 text-md text-white bg-gradient-to-r from-[#FD7900] to-[#FFE600] rounded font-bold hover:scale-110 hover:text-black md:bg-[#393939]"
                    >
                      Mint Now
                    </button>
                    :
                    <div>
                      {
                      connected == true? 
                      <button
                      className=" cursor-pointer px-3 py-2 text-md text-white bg-gradient-to-r from-[#FD7900] to-[#FFE600] rounded font-bold hover:scale-110 hover:text-black md:bg-[#393939]"
                      >
                       connected
                      </button>
                      :
                      <button
                      onClick={connectWallet}
                      className=" cursor-pointer px-3 py-2 text-md text-white bg-gradient-to-r from-[#FD7900] to-[#FFE600] rounded font-bold hover:scale-110 hover:text-black md:bg-[#393939]"
                      >
                        Connect Wallet
                      </button>

                      }
                      </div>
                    // <button
                    //   onClick={connectWallet}
                    //   className=" cursor-pointer px-3 py-2 text-md text-white bg-gradient-to-r from-[#FD7900] to-[#FFE600] rounded font-bold hover:scale-110 hover:text-black md:bg-[#393939]"
                    // >
                    //   {connected ? "connected":"Connect Wallet"}
                    // </button>
                  }
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Navbar
