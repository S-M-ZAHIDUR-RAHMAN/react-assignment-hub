

const Banner = () => {
    return (
        <div className="hero mx-auto min-h-[100vh] lg:min-h-[87.7vh]" style={{ backgroundImage: 'url(https://i.ibb.co/cxkj08S/banner.jpg)' }}>
            <div className="cover"></div>
            <div className="p-0 text-center text-neutral-content">
            <div className="w-[90vw] text-left text-white">
                    <div className="normal-case text-white py-4 px-4 text-5xl font-extrabold bg-blue-700"><span className="text-yellow-300">Assignment</span>Hub</div>
                    <p className="mb-5 p-4 hero-overlay text-4xl">STUDYING IN A GROUP IS GREAT<br /> ARE YOU INTERESTED? <br /> JOIN US NOW !! <span className="font-bold underline"></span></p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;