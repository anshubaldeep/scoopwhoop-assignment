import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import Banner from '../components/Banner';
import Footer from './Footer';



const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

const Layout=(props)=>{
    const [width,setWidth]=useState(getWidth());

    useEffect(()=>{
        let timeoutId = null;
    const resizeListener = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setWidth(getWidth()), 150);    
    }
    window.addEventListener('resize', resizeListener);
    return () => {
        window.removeEventListener('resize', resizeListener);
    }
    },[])
    console.log(width);
        return(
            <>
            <CustomNavbar width={width}/>
            <Banner width={width}/>
            <Container>
            {props.children}
            </Container>
            <Footer/>
            </>
        );
}

export default Layout;