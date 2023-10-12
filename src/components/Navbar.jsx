import { BiSolidCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
const Navbar = () => {
  return (
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
    </div>
  );
};

export default Navbar;
