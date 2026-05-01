import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'Users' },
    //{ name: 'Services', path: '/services', icon: 'Briefcase' },
    // { name: 'Portfolio', path: '/portfolio', icon: 'FolderOpen' },
    //{ name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  const secondaryItems = [
    { name: 'Virtual Assistant', path: '/virtual-assistant', icon: 'BookOpen' },
    {
      name: 'IT and Business Solutions',
      path: 'https://tech.snapdesk.com.au/',
      icon: 'Users',
      external: true
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path || (path === '/homepage' && location?.pathname === '/');
  };

  const Logo = () => (
    <Link to="/homepage" className="flex items-center gap-3 group">
      <img
        src="https://d1c5khxbu1u21j.cloudfront.net/logo-snapdesk.png"
        alt="SnapDesk Logo"
        className="h-10 w-auto object-contain"
      />
      <span className="hidden sm:block text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
        SnapDesk
      </span>
    </Link>
  );

  const NavLink = ({ item, isMobile = false }) => {
    const baseClasses = `
      group relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300
      ${isMobile ? 'w-full justify-start' : ''}
      ${isActivePath(item?.path)
        ? 'text-primary bg-primary/5'
        : 'text-text-secondary hover:text-primary hover:bg-primary/5'
      }
    `;

    const content = (
      <>
        <Icon
          name={item?.icon}
          size={16}
          className={`transition-colors duration-300 ${
            isActivePath(item?.path)
              ? 'text-primary'
              : 'text-text-secondary group-hover:text-primary'
          }`}
        />
        <span className="font-medium text-sm">{item?.name}</span>
        {isActivePath(item?.path) && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
        )}
      </>
    );

    if (item?.external) {
      return (
        <a
          href={item?.path}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        to={item?.path}
        className={baseClasses}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        {content}
      </Link>
    );
  };


  const MoreDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 px-3 py-2 text-text-secondary hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5"
        >
          <Icon name="Briefcase" size={16} />
          <span className="font-medium text-sm">Services</span>
        </button>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-lg shadow-strong z-50 py-2">
              {secondaryItems?.map((item) =>
                item?.external ? (
                  <a
                    key={item?.path}
                    href={item?.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200
                      text-text-secondary hover:text-primary hover:bg-primary/5
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </a>
                ) : (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`
                      flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200
                      ${isActivePath(item?.path)
                        ? 'text-primary bg-primary/5'
                        : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </Link>
                )
              )}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-400 organic
        ${isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-medium border-b border-border' 
          : 'bg-[#f6f4f1] '
        }
      `}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <NavLink key={item?.path} item={item} />
            ))}
            <MoreDropdown />
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="btn-magnetic">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      Schedule Call
                    </Button>
                  </Link>
              </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border shadow-strong z-50 lg:hidden">
            <nav className="px-4 py-6 space-y-2">
              {navigationItems?.map((item) => (
                <NavLink key={item?.path} item={item} isMobile />
              ))}
              <div className="border-t border-border pt-4 mt-4 space-y-2">
                {secondaryItems?.map((item) => (
                  <NavLink key={item?.path} item={item} isMobile />
                ))}
              </div>
              <div className="flex items-center">
                <Link to="/contact" className="w-full">
                  <Button variant="outline" size="sm" className="btn-magnetic w-full">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Schedule Call
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;