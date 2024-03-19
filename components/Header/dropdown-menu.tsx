'use client';
import * as React from 'react';
import { useState } from 'react';
import LogoIcon, { LogoIconLarge } from '@/ui/assets/LogoIcon/logo-icon';
import { ModeToggle } from '@/ui/assets/ThemeToggle/theme-toggle';
import GitHubIcon from '@/ui/assets/GitHubIcon/gh-icon';
import MenuItem from '@/ui/MenuItem/menu-item';
import { CTAButton } from '@/ui/Button/cta-button';
import Link from 'next/link';
import HamburgerIcon from '@/ui/assets/HamburgerIcon/hamburger-icon';
import { motion } from 'framer-motion';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Heading } from '@/ui/Heading/heading';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact', isButton: true },
];

const containerVariants = {
  hidden: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
      type: 'spring',
      stiffness: 200,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: 1,
      type: 'spring',
      stiffness: 200,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navContentClass = dropdownOpen ? 'opacity-0' : 'opacity-80';
  const navBarOverlayClass = dropdownOpen ? 'bg-[var(--color-background)]' : '';

  return (
    <nav
      className={`flex items-center justify-around bg-[#e5e4e2]/90 dark:bg-[#1c2022]/90 ${navBarOverlayClass}`}
    >
      <div className={`small-shadow ${navContentClass}`}>
        <div className='md:hidden flex place-content-center'>
          <LogoIcon />
        </div>
        <div className='hidden md:flex place-content-center'>
          <LogoIconLarge />
          <Heading as='h2' color='default' size='h2Tiny'>
            Alex Hosp
          </Heading>
        </div>
      </div>

      <div
        className={`hidden lg:flex items-center space-x-4 ${navContentClass}`}
      >
        {navLinks.map((link) =>
          link.isButton ? (
            <Link href={link.href} key={link.name}>
              <CTAButton>{link.name}</CTAButton>
            </Link>
          ) : (
            <Link key={link.name} href={link.href}>
              <MenuItem>{link.name}</MenuItem>
            </Link>
          )
        )}
      </div>

      <div
        className={`flex items-center lg:space-x-4 ml-auto lg:ml-0 ${navContentClass}`}
      >
        <div className='flex items-center'>
          <ModeToggle />
          <GitHubIcon />
        </div>
      </div>
      <DropdownMenuPrimitive.Root
        open={dropdownOpen}
        onOpenChange={setDropdownOpen}
      >
        <DropdownMenuPrimitive.Trigger>
          <div className='lg:hidden z-40'>
            <HamburgerIcon
              isOpen={dropdownOpen}
              toggleOpen={() => {
                setDropdownOpen(!dropdownOpen);
              }}
            />
          </div>
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content className='top-0 min-h-screen w-screen flex flex-col items-start bg-[var(--color-background)] focus:outline-none'>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              className='leading-5 space-y-11 p-4' // Add spacing and padding as needed
            >
              {navLinks.map((link, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <DropdownMenuPrimitive.Item asChild>
                    <Link href={link.href} className='block'>
                      {link.isButton ? (
                        <CTAButton>{link.name}</CTAButton>
                      ) : (
                        <MenuItem>{link.name}</MenuItem>
                      )}
                    </Link>
                  </DropdownMenuPrimitive.Item>
                </motion.div>
              ))}
            </motion.div>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </nav>
  );
};

export default NavigationBar;
