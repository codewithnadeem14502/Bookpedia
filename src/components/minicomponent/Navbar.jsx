import { BiSolidCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/bookpedia-logos.jpeg";
import { getTotalCartQuantity } from "../cart/cartSlice";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const username = useSelector((state) => state.user.username);

  const handleMenu = () => {
    menu == false ? setMenu(true) : setMenu(false);
  };
  const totalCartQuatity = useSelector(getTotalCartQuantity);
  return (
    <>
      <div className="flex justify-between bg-white  h-[95px]">
        <div className=" ">
          <Link to="/">
            <img
              className="w-[100px] h-[95px] md:w-[150px] md:h-[95px]"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="bg-blue-600 w-full hidden md:block items-center ">
          <ul className="text-slate-200 flex justify-evenly mt-8">
            <li className="font-bold text-xl  hover:text-white ">
              <NavLink to="/book" className="focus:text-white  focus:underline">
                Home
              </NavLink>
            </li>
            <li className="font-medium text-xl  hover:text-white">
              <NavLink
                to="best-selling"
                className="focus:text-white focus:underline"
              >
                Best Seller
              </NavLink>
            </li>
            <li className="font-medium text-xl hover:text-white">
              <NavLink
                to="about-us"
                className="focus:text-white focus:underline"
              >
                About Us
              </NavLink>
            </li>
            <li className="font-medium text-xl hover:text-white">
              <NavLink
                to="contact"
                className="focus:text-white focus:underline"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-blue-600 md:flex md:justify-evenly w-[15%] pt-5  hidden ">
          <NavLink to="profile" className="text-white text-lg focus:text-white">
            <VscAccount className="w-[30px] h-[40px]  hover:text-white" />
            <p className="text-sm font-bold text-white">{username}</p>
          </NavLink>
          <NavLink to="cart" className="text-white text-lg focus:text-white">
            <div className="flex">
              <BiSolidCart className="w-[30px] h-[40px]  hover:text-white" />
              {totalCartQuatity > 0 && (
                <h1 className="text-center text-white font-bold p-2 bg-black rounded-full">
                  {totalCartQuatity}
                </h1>
              )}
            </div>
          </NavLink>
        </div>
        <div className="md:hidden ">
          <div className="flex justify-center mr-3 mt-5">
            {menu != true ? (
              <div className="flex w-[100px] justify-between">
                <NavLink
                  to="cart"
                  className="focus:text-white"
                  // onClick={() => setMenu(false)}
                >
                  <div className="flex">
                    <BiSolidCart className="w-[30px] h-[40px]  hover:text-white" />
                    {totalCartQuatity > 0 && (
                      <h1 className="text-center text-white font-bold p-2 bg-yellow-500 rounded-full">
                        {totalCartQuatity}
                      </h1>
                    )}
                  </div>
                </NavLink>

                <GiHamburgerMenu
                  className="w-[30px] h-[40px] "
                  onClick={handleMenu}
                />
              </div>
            ) : (
              <RxCross2 className="w-[30px] h-[40px] " onClick={handleMenu} />
            )}
          </div>
          {menu == true && (
            <>
              <div className="flex bg-blue-500 z-20 justify-center absolute top-11 right-16 w-[220px] h-[300px] rounded-md ">
                <ul className="text-white flex justify-evenly  flex-col text-center items-center  w-full ">
                  <li className="font-bold text-xl hover:text-white ">
                    <NavLink
                      to="/book"
                      className="focus:text-white "
                      onClick={() => setMenu(false)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <hr className="w-[80%] pr-5 items-center" />
                  <li className="font-medium text-xl hover:text-white">
                    <NavLink
                      to="best-selling"
                      className="focus:text-white"
                      onClick={() => setMenu(false)}
                    >
                      {" "}
                      Best Seller
                    </NavLink>
                  </li>
                  <hr className="w-[80%] pr-5 items-center" />
                  <li className="font-medium text-xl hover:text-white">
                    <NavLink
                      to="about-us"
                      className="focus:text-white"
                      onClick={() => setMenu(false)}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <hr className="w-[80%] pr-5 items-center" />
                  <li className="font-medium text-xl hover:text-white">
                    <NavLink
                      to="cart"
                      className="focus:text-white"
                      onClick={() => setMenu(false)}
                    >
                      Cart
                      {totalCartQuatity > 0 && (
                        <h1 className="text-center font-bold p-0 md:p-2 bg-blue-400 rounded-full">
                          {totalCartQuatity}
                        </h1>
                      )}
                    </NavLink>
                  </li>
                  <hr className="w-[80%] pr-5 items-center" />
                  <li className="font-medium text-xl hover:text-white">
                    <NavLink
                      to="profile"
                      className="focus:text-white"
                      onClick={() => setMenu(false)}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <hr className="w-[80%] pr-5 items-center" />
                  <li className="font-medium text-xl hover:text-white">
                    <NavLink
                      to="contact"
                      className="focus:text-white"
                      onClick={() => setMenu(false)}
                    >
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
