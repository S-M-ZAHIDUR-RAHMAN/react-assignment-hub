import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Details = () => {
    const detailedAssignments = useLoaderData();
    const { title } = useParams();
    const { user } = useContext(AuthContext);
    const { displayName } = user;
    console.log(user.displayName);
    const [assignmentDetails, setAssignmentDetails] = useState();

    useEffect(() => {
        const findAssignmentDetails = detailedAssignments?.find(detailed => detailed?.title === title);
        setAssignmentDetails(findAssignmentDetails);
    }, [title, detailedAssignments])
    // console.log(detailedAssignment);
    const detailsImageStyle = {
        backgroundImage: `url(${assignmentDetails?.imageURL})`
    }
    const detailedAssignment = { ...assignmentDetails, displayName };
    console.log(detailedAssignment);

   


    return (
        <div className="flex flex-col pl-5 pr-5 pb-5">
            <div className="hero min-h-[70vh] flex flex-col rounded-md justify-end" style={detailsImageStyle}>
                <div className="w-full bg-opacity-60">
                    <div className="hero-overlay text-white animate-bounce text-3xl font-bold underline pl-5 py-5">
                        {detailedAssignment?.title}
                    </div>
                </div>
            </div>
            <div className="mt-14 px-4 lg:px-0">
                <div className="flex flex-col gap-5 lg:px-10 md:px-4 px-2">
                    <p>Published by: {detailedAssignment?.userName}</p>
                    <p>Marks: {detailedAssignment?.marks}</p>
                    <p>Difficulty Level: {detailedAssignment?.difficultyLevel}</p>
                    <p>{detailedAssignment?.description}</p>
                </div>
                <div className="flex flex-row justify-center gap-5">
                    <div className="flex justify-center mt-5">
                    <Link to={`/submission/${title}`}><button className="btn accent bg-slate-200">Take Assignment</button></Link>
                    </div>
                    <Link to={`/`}>
                        <div className="flex justify-center mt-5">
                            <button className="btn accent bg-slate-200">Go Back to <br />HOME</button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Details;