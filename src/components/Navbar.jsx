import { BiSolidCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    menu == false ? setMenu(true) : setMenu(false);
  };
  return (
    <>
      <div className="flex justify-between  h-[70px]">
        <div className=" mr-5">
          <img
            className="w-[120px] h-[50px]"
            src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png"
            alt="logo"
          />
        </div>
        <div className="bg-red-500 w-full hidden md:block">
          <ul className="text-white flex justify-evenly mt-5">
            <li className="font-bold text-xl hover:text-yellow-400">Home</li>
            <li className="font-medium text-xl hover:text-yellow-400">
              New Arrivals
            </li>
            <li className="font-medium text-xl hover:text-yellow-400">
              Best Seller
            </li>
            <li className="font-medium text-xl hover:text-yellow-400">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="bg-yellow-300 md:flex md:justify-evenly w-[15%] pt-5  hidden ">
          <VscAccount className="w-[30px] h-[40px]  hover:text-red-500" />
          <BiSolidCart className="w-[30px] h-[40px]  hover:text-green-500" />
        </div>
        <div className="md:hidden ">
          <div className="flex justify-center mr-3 mt-2">
            <GiHamburgerMenu
              className="w-[30px] h-[40px] "
              onClick={handleMenu}
            />
          </div>
          {menu == true && (
            <div className="flex bg-red-500 justify-center absolute top--1 right-1 w-[150px] h-[250px] rounded-md">
              <ul className="text-white flex justify-evenly  flex-col text-center  ">
                <li className="font-bold text-sm hover:text-yellow-400">
                  Home
                </li>
                <hr />
                <li className="font-medium text-sm hover:text-yellow-400">
                  New Arrivals
                </li>
                <hr />
                <li className="font-medium text-sm hover:text-yellow-400">
                  Best Seller
                </li>
                <hr className="w-full" />
                <li className="font-medium text-sm hover:text-yellow-400">
                  Contact Us
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
