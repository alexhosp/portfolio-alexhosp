'use client';
import LogoIcon from '@/ui/assets/LogoIcon/logo-icon';
import { LogoIconLarge } from '@/ui/assets/LogoIcon/logo-icon';
import { LargeLinkednIcon } from '@/ui/assets/LinkedInIcon/linkedin-icon';
import { LargeGitHubIcon } from '@/ui/assets/GitHubIcon/gh-icon';
import { ContactFormModal } from '@/components/Modal/modal';
import { FooterMenuItem } from '@/ui/MenuItem/menu-item';
import { Heading } from '@/ui/Heading/heading';
import Text from '@/ui/Text/text';
import { PrivacyPolicyModal } from '@/components/Modal/modal';

const Footer = () => {
  return (
    <footer className='bg-[var(--color-background)]' role='contentinfo'>
      <nav role='navigation'>
        <div className='mx-auto max-w-screen'>
          <div className='md:grid md:grid-cols-4 md:pt-6 md:justify-center items-center'>
            <div className='md:col-span-1 pt-1.5 mb-3 md:mb-0 flex flex-row align-center justify-center'>
              <div className='md:hidden'>
                <LogoIcon />
              </div>
              <div className='hidden md:block'>
                <LogoIconLarge />
              </div>
              <div className='md:hidden flex lg:flex place-content-center'>
                <Heading as='h2' color='default' size='h2Tiny'>
                  Alex Hosp
                </Heading>
              </div>
              <div className='md:flex hidden lg:hidden items-center'>
                <Text as='p' color='default' size='small' textColor='default'>
                  Alex Hosp
                </Text>
              </div>
            </div>

            <div className='col-start-2 col-end-4 flex items-center justify-center'>
              <ul className='grid grid-cols-3 gap-3'>
                <li className='mb-1.5 flex place-content-center'>
                  <LargeLinkednIcon />
                </li>
                <li className='mb-1.5 flex place-content-center'>
                  <LargeGitHubIcon />
                </li>
                <li className='mb-1.5 flex place-content-center'>
                  <ContactFormModal />
                </li>
              </ul>
            </div>
            <div className='col-start-4 flex flex-col place-content-around'>
              <ul className='md:flex md:flex-col grid grid-cols-2 text-[var(--color-foreground)]'>
                <li className='mb-4 flex place-content-center'>
                  <FooterMenuItem>
                    <a
                      href='/cv_alexandra_hosp.pdf'
                      target='_blank'
                      rel='noopener noreferrer'
                      download
                      aria-label='Download my resume as a PDF file'
                    >
                      Resume
                    </a>
                  </FooterMenuItem>
                </li>
                <li className='mb-4 flex place-content-center'>
                  <PrivacyPolicyModal />
                </li>
              </ul>
            </div>
          </div>

          <hr className='my-6 border-[var(--color-primary)] sm:mx-auto lg:my-8' />
          <div className='flex flex-col items-center text-center pb-1.5'>
            <Text as='p' textColor='default' size='small'>
              © 2024 Alex Hosp
              <br />
              <a
                className='underline decoration-[var(--color-foreground)] decoration-from-font'
                rel='license'
                href='http://creativecommons.org/licenses/by/4.0/'
              >
                CC 4.0 International License
              </a>
            </Text>
          </div>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
