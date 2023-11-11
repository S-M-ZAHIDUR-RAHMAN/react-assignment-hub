/* eslint-disable react/prop-types */


const MyAssignment = ({assignment}) => {
    console.log(assignment);
    return (
        <div>
            <div className="card w-72 shadow-lg hover:opacity-80 glass">

                <div className="card-body flex flex-col justify-center">
                    <h2 className="card-title text-2xl font-bold">{assignment?.title}</h2>
                    <p>Total Marks: {assignment?.marks}</p>
                    <p>Obtained Marks: {assignment?.marking}</p>
                    <p>Status: {assignment?.status}</p>
                    <p>Feedback: {assignment?.feedback}</p>
                </div>
            </div>
        </div>
    );
};

export default MyAssignment;