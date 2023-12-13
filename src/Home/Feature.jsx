/* eslint-disable react/prop-types */


const Feature = ({part}) => {
  
  
    return (
        <div>
            <div className="card w-72 h-auto shadow-lg hover:opacity-80 glass my-4">
                <div className="card-body flex flex-col justify-center">
                    <h2 className="card-title text-2xl font-bold text-center">{part?.title}</h2>
                    <hr />
                    <p className="text-center">{part?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;