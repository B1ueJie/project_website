import Header from './header';
import Footer from './footer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const name = 'Jie Lin';
export const siteTitle = 'Website';

export default function Layout(props:Props) {
  return (
    <div className="h-screen p-1 tracking-wide">
      <Header/>
      <main className="h-5/6 flex p-6">{props.children}</main>
      <Footer/>
    </div>
  );
}
