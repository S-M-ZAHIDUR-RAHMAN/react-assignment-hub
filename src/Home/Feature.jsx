/* eslint-disable react/prop-types */


const Feature = ({part}) => {
  
  
    return (
        <div>
            <div className="card w-72 shadow-lg hover:opacity-80 glass">
                <div className="card-body flex flex-col justify-center">
                    <h2 className="card-title text-2xl font-bold">{part?.title}</h2>
                    <p>{part?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;