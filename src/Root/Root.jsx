import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Header/NavBar/NavBar';
import Footer from '../Footer/Footer';
import bgApp from '../assets/bg-app.gif'


const Root = () => {
    const locationPage = useLocation()

    useEffect(()=> {
        if(locationPage.pathname==="/"){
            document.title = `Assignment-Hub - Home`
        }
        else{
            document.title = `Assignment-Hub ${locationPage.pathname.replace("/",'- ')}`
        }
        
    },[locationPage.pathname])
    const bgStyle ={
        backgroundImage: `url(${bgApp})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className='bg-cover text-white' style={bgStyle}>
        <NavBar></NavBar>
        <div>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Root;