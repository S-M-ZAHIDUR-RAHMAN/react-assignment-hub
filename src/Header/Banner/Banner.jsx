
import bgCover from '../../assets/bg-cover.gif'
const Banner = () => {
    const bgStyle ={
        backgroundImage: `url(${bgCover})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="hero mx-auto min-h-[100vh] lg:min-h-[87.7vh]" style={bgStyle}>
            <div className="cover"></div>
        </div>
    );
};

export default Banner;