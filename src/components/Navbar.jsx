import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import user from '../assets/user.jpg';

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-white shadow px-6 py-6 sticky top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        <h1 className=" text-xl md:text-2xl font-medium cursor-pointer">Marketing Dashboard</h1>
        <button className="lg:hidden block text-gray-700 border border-gray-500 rounded text-2xl p-[0.7px] transition-all duration-300 ease-in-out hover:scale-110" onClick={() => setMenu(!menu)}>
          {menu ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
        <ul className={`text-gray-800 transition-all duration-500 flex items-center flex-col fixed bg-gray-50 top-19 w-full h-full gap-10 text-xl lg:static lg:h-0 lg:flex-row lg:justify-center lg:w-0 ${menu ? "right-0" : "x1"}`}>
          <li className="mt-5 lg:mt-0"><a href="#" onClick={() => setMenu(false)}>Dashboard</a></li>
          <li><a href="#" onClick={() => setMenu(false)}>Campaigns</a></li>
          <li><a href="#" onClick={() => setMenu(false)}>Analytics</a></li>
          <li><a href="#" onClick={() => setMenu(false)}>Settings</a></li>
          <div className="block lg:hidden w-10 h-10 rounded-full overflow-hidden border border-gray-400">
            <img src={user} alt="user" className="w-full h-full" />
          </div>
        </ul>
        <div className="hidden lg:block w-10 h-10 rounded-full overflow-hidden border border-gray-400">
          <img src={user} alt="user avatar" className="w-full h-full" />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
