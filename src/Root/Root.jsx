import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Header/NavBar/NavBar';
import Footer from '../Footer/Footer';


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

    return (
        <div className='bg-[#FFF] text-[#171717]'>
        <NavBar></NavBar>
        <div>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Root;