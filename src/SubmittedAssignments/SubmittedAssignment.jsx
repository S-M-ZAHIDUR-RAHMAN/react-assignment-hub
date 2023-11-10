/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SubmittedAssignment = ({pendingAssignment, pendingAssignments, setPendingAssignments}) => {
    const { title, marks, displayName, _id } = pendingAssignment;
    console.log(pendingAssignment);
    return (
        <div>
            <div className="card w-72 shadow-lg hover:opacity-80 glass">

                <div className="card-body flex flex-col justify-center">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p>Total Marks: {marks}</p>
                    <p>Submitted by: {displayName}</p>
                </div>
                <div className="flex flex-row justify-start gap-1 ml-8 mb-4">
                    <Link to={`/marking/${title}`}><button className="btn btn-accent">Give Mark</button></Link>
                </div>

            </div>
        </div>
    );
};

export default SubmittedAssignment;