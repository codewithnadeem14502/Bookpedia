import { BiSolidCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/bookpedia-logos.jpeg";
import { getTotalCartQuantity } from "./cartSlice";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    menu == false ? setMenu(true) : setMenu(false);
  };
  const totalCartQuatity = useSelector(getTotalCartQuantity);
  return (
    <>
      <div className="flex justify-between   h-[95px]">
        <div className=" ">
          <Link to="/">
            <img className="w-[150px] h-[95px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="bg-blue-500 w-full hidden md:block items-center ">
          <ul className="text-white flex justify-evenly mt-8">
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
          <NavLink to="profile" className="focus:text-blue-400">
            <VscAccount className="w-[30px] h-[40px]  hover:text-blue-400" />
          </NavLink>
          <NavLink to="cart" className="focus:text-blue-400">
            <BiSolidCart className="w-[30px] h-[40px]  hover:text-blue-400" />
            <h1>{totalCartQuatity}</h1>
          </NavLink>
        </div>
        <div className="md:hidden ">
          <div className="flex justify-center mr-3 mt-5">
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
