import classNames from 'classnames';
import Head from 'next/head';
import { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Head>
        <title>MyEVM Fun</title>
      </Head>

      <Navbar />

      <main
        className={classNames(
          'w-full relative flex flex-col flex-grow items-center mx-auto',
          className
        )}
      >
        {children}
      </main>
    </div>
  );
};
