import Head from 'next/head';
import Nav from '../nav';
import { Card } from 'reactstrap';
import Footer from '../footer';
export default function Main({ children, router }) {
  return (
    <Card style={{border:'0'}}>

    <Nav path={router?.pathname}/>
        {children}

    <Footer />
    </Card>
  )
}