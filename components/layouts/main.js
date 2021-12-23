import Head from 'next/head';
import Nav from '../nav';
import { Card } from 'reactstrap';

export default function Main({ children, router }) {
  return (
    <Card>

    <Nav path={router?.pathname}/>
      {children}
    </Card>
  )
}