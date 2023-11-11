
import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner/Banner";
import Feature from "./Feature";
import Faq from "./Faq";
const Home = () => {
    const parts = useLoaderData();
    console.log(parts);

    return (
        <div>
            <Banner></Banner>
            <div className="flex flex-row justify-center mb-5 text-4xl text-white font-bold hero-overlay mt-5 py-4">
                <h2>Features</h2>
            </div>
            <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-center gap-4">
            {
                parts?.map((part) =>
                 <Feature key={part?._id} part={part} ></Feature>)
            }
            </div>
            <div className="flex flex-row justify-center mb-5 text-4xl text-white font-bold hero-overlay mt-5 py-4">
                <h2>FAQ</h2>
            </div>
            <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-center gap-4">
            {
                parts?.map((part) =>
                 <Faq key={part?._id} part={part} ></Faq>)
            }
            </div>
           
        </div>
    );
};

export default Home;