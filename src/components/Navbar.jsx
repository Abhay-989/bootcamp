import { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#2b1a6f] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center ">
       
        <div className="flex items-center space-x-2 pr-20 ">
            <Link to="/" className="flex items-center space-x-2   ">
            <img src="/images/ieee-logo.png" alt="IEEE Logo" className="h-12" />
            {/* <span className="text-xl font-bold text-purple-800">IEEE</span>
            <span className="text-sm text-purple-600 hidden sm:inline">MANIT Student Branch</span> */}
          </Link>
        </div>


   {/* Desktop Menu */}
<div className="hidden md:flex space-x-6 font-medium text-white relative right-3">
            <Link
  to="/"
  className={`hover:text-purple-500 pb-1 border-b-2 ${
    currentPath === '/' ? 'border-red-500' : 'border-transparent'
  }`}
>
  Home
</Link>

<Link
  to="/about"
  className={`hover:text-purple-500 pb-1 border-b-2 ${
    currentPath === '/about' ? 'border-red-500' : 'border-transparent'
  }`}
>
  About
</Link>

<Link
  to="/faqs"
  className={`hover:text-purple-500 pb-1 border-b-2 ${
    currentPath === '/faqs' ? 'border-red-500' : 'border-transparent'
  }`}
>
  FAQs
</Link>

<Link
  to="/mentors"
  className={`hover:text-purple-500 pb-1 border-b-2 ${
    currentPath === '/mentors' ? 'border-red-500 text-orange-500 ' : 'border-transparent'
  }`}
>
  Mentors
</Link>

<Link
  to="/timeline"
  className={`hover:text-purple-500 pb-1 border-b-2 ${
    currentPath === '/timeline' ? 'border-red-500 text-orange-500 ' : 'border-transparent'
  }`}
>
  Timeline
</Link>

          </div>

         
          

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-2 shadow-md">
          <Link to="/" className="block text-gray-700">Home</Link>
          <Link to="/about" className="block text-gray-700">About</Link>
          <Link to="/event1" className="block text-gray-700">Bootcamp</Link>
          <Link to="/event2" className="block text-gray-700">Hackathon</Link>
          <Link to="/team" className="block text-gray-700">Team</Link>
          <Link to="/alumni" className="block text-gray-700">Alumni</Link>
          <Link to="/contact" className="block text-gray-700">Contact us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
