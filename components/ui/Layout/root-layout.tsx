import { Slot } from '@radix-ui/react-slot';

export const RootLayout: React.FC<{
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}> = ({ header, children, footer }) => {
  return (
    <div className='flex flex-col'>
      <Slot>
        <div className='fixed top-0 left-0 w-full z-[200]'>{header}</div>
      </Slot>
      <main className='flex-grow overflow-auto mt-11'>{children}</main>
      <Slot>
        <div className='mt-auto'>{footer}</div>
      </Slot>
    </div>
  );
};
