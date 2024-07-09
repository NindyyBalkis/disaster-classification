import React from 'react';

export default function Header() {
  function handleScrollToSection(event, sectionId) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function KomponenHeader() {
    return (
      <div className="flex justify-between items-center px-4 top-0 left-0 w-full z-50 py-0 shadow-md fixed" style={{ backgroundColor: '#FFF8E7' }}>
        <div className='flex justify-between items-center mx-20 py-2 w-full'>
          <LogoH />
          <MenuContainer />
          <LoginButton />
        </div>
      </div>
    );
  }

  function MenuContainer() {
    return (
      <div className="flex-1 flex justify-center mx-10">
        <Menu />
      </div>
    );
  }

  function Menu() {
    return (
      <div className="flex space-x-16 items-center">
        <a
          href="#Home" onClick={(e) => handleScrollToSection(e, "Home")}
          className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-2 py-1 rounded-md text-1xl font-dm-serif-text"
        >
          Home
        </a>
        <a
          href="#Menu" onClick={(e) => handleScrollToSection(e, "Menu")}
          className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-2 py-1 rounded-md text-1xl font-dm-serif-text"
        >
          Menu
        </a>
        <a
          href="#About" onClick={(e) => handleScrollToSection(e, "About")}
          className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-2 py-1 rounded-md text-1xl font-dm-serif-text"
        >
          About
        </a>
        <a
          href="#Team" onClick={(e) => handleScrollToSection(e, "Team")}
          className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-2 py-1 rounded-md text-1xl font-dm-serif-text"
        >
          Team
        </a>
      </div>
    );
  }

  function LogoH() {
    return (
      <div className="flex items-center space-x-2 ml-4">
        <img src="logoH.png" alt="Logo" className="h-17 w-auto" />
        <span className="text-gray-900 text-1xl font-bold font-dm-serif-text">Disaster Detector</span>
      </div>
    );
  }

  function LoginButton() {
    return (
      <div className="mr-10">
        <button
          className="text-white py-2 px-8 hover:border-transparent rounded flex items-center"
          style={{ backgroundColor: '#7B9450', borderColor: '#A9B489', borderRadius: '50px', fontSize: '1rem' }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <KomponenHeader />
    </div>
  );
}
