import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const MENU_ITEMS = [
  { id: 'main', label: 'Main' },
  { id: 'why', label: 'Why' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'price', label: 'Price' },
  { id: 'contact', label: 'Contact' },
  { id: 'qna', label: 'QnA' }
];

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('main');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-lg'
      }`}>
      <div className="max-w-[430px] mx-auto relative h-[60px] flex items-center justify-center">
        {/* 햄버거 메뉴 버튼 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <HiX className="h-6 w-6 text-gray-600" />
          ) : (
            <HiMenu className="h-6 w-6 text-gray-600" />
          )}
        </button>

        {/* 로고 */}
        <div className="text-xl font-bold text-primary-600">
          Brand Maker
        </div>

        {/* 수정된 모바일 메뉴 */}
        <div className={`
          fixed top-[60px] left-0
          w-48
          bg-white shadow-lg
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="py-2">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                className={`block px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${activeSection === item.id ? 'text-primary-600 font-semibold' : 'text-gray-700'
                  }`}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(item.id);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isScrolled: PropTypes.bool
};

Navbar.defaultProps = {
  isScrolled: false
};

export default Navbar;