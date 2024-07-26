import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <Link href={href} className="text-primary-color hover:text-accent-color transition-colors duration-300">
    {children}
  </Link>
);

const Navbar: React.FC = () => (
  <nav className="bg-secondary-color p-4">
    <div className="container mx-auto flex justify-center items-center space-x-8">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About Me</NavItem>
      <NavItem href="/projects">Projects</NavItem>
    </div>
  </nav>
);

export default Navbar;