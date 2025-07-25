import React from 'react';
import Nav from './components/Nav';
import Body from './components/body';
import BgImag from './components/bg_image';
import Flavours from './components/flavours';
import Flavoursgelato from './components/flavour_gelato';
import Footer from './components/footer';
const App = () => {

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/icecream', label: 'ICECREAM' },
    { href: '/contact', label: 'CONTACT' }
  ];

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <div>
      <Nav logoText="ICECREAM" links={navLinks} />
      <BgImag/>
      <Body/>
      <Flavoursgelato/>
      <Flavours/>
      <Footer companyName="ICECREAM Inc." year={2025} links={footerLinks} />
    </div>
  )
}

export default App;
