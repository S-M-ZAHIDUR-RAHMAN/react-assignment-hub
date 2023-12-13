/* eslint-disable react/prop-types */


const Faq = ({part}) => {
    return (
        <div>
            <div className="card w-72 shadow-lg hover:opacity-80 glass">
                <div className="card-body flex flex-col justify-center">
                    <h2 className="card-title text-2xl font-bold text-center">{part?.question}</h2>
                   <hr />
                    <p className="text-center">{part?.answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;