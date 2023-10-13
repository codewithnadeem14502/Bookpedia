import { BiSolidCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
            <li className="font-bold text-xl  hover:text-yellow-400">
              <NavLink to="/" className="focus:text-yellow-400">
                Home
              </NavLink>
            </li>
            <li className="font-medium text-xl  hover:text-yellow-400">
              <NavLink to="best-selling" className="focus:text-yellow-400">
                Best Seller
              </NavLink>
            </li>
            <li className="font-medium text-xl hover:text-yellow-400">
              <NavLink to="about-us" className="focus:text-yellow-400">
                About Us
              </NavLink>
            </li>
            <li className="font-medium text-xl hover:text-yellow-400">
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-yellow-300 md:flex md:justify-evenly w-[15%] pt-5  hidden ">
          <NavLink to="profile" className="focus:text-yellow-400">
            <VscAccount className="w-[30px] h-[40px]  hover:text-red-500" />
          </NavLink>
          <NavLink to="cart" className="focus:text-yellow-400">
            <BiSolidCart className="w-[30px] h-[40px]  hover:text-green-500" />
          </NavLink>
        </div>
        <div className="md:hidden ">
          <div className="flex justify-center mr-3 mt-2">
            {menu != true ? (
              <GiHamburgerMenu
                className="w-[30px] h-[40px] "
                onClick={handleMenu}
              />
            ) : (
              <RxCross2 className="w-[30px] h-[40px] " onClick={handleMenu} />
            )}
          </div>
          {menu == true && (
            <>
              <div className="flex bg-red-500 justify-center absolute top-11 right-16 w-[270px] h-[300px] rounded-md ">
                <ul className="text-white flex justify-evenly  flex-col text-center   ">
                  <li className="font-bold text-xl hover:text-yellow-400">
                    <NavLink to="/" className="focus:text-yellow-400">
                      Home
                    </NavLink>
                  </li>
                  <hr />
                  <li className="font-medium text-xl hover:text-yellow-400">
                    <NavLink
                      to="best-selling"
                      className="focus:text-yellow-400"
                    >
                      {" "}
                      Best Seller
                    </NavLink>
                  </li>
                  <hr />
                  <li className="font-medium text-xl hover:text-yellow-400">
                    <NavLink to="about-us" className="focus:text-yellow-400">
                      About Us
                    </NavLink>
                  </li>
                  <hr className="w-full" />
                  <li className="font-medium text-xl hover:text-yellow-400">
                    <NavLink to="cart" className="focus:text-yellow-400">
                      Cart
                    </NavLink>
                  </li>
                  <hr className="w-full" />
                  <li className="font-medium text-xl hover:text-yellow-400">
                    <NavLink to="profile" className="focus:text-yellow-400">
                      Profile
                    </NavLink>
                  </li>
                  <hr className="w-full" />
                  <li className="font-medium text-xl hover:text-yellow-400">
                    <NavLink to="contact" className="focus:text-yellow-400">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
