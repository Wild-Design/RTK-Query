import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import NavBar from './NavBar';
// import { store } from '@/ReduxToolkit/store';
// import { Provider } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <Provider store={store}>
    <html lang='es'>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
    // </Provider>
  );
}
