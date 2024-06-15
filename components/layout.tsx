import '../styles/global.css';
import NavBar from './navbar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const name = 'Jie Lin';
export const siteTitle = 'Website';

export default function Layout(props:Props) {
  return (
    <div className="tracking-wide">
      <NavBar/>
      <main className="p-4">{props.children}</main>
    </div>
  );
}
