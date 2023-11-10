import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SubmittedAssignment from "./SubmittedAssignment";

const SubmittedAssignments = () => {
    const submittedAllAssignments = useLoaderData();
    const [pendingAssignments, setPendingAssignments] = useState(submittedAllAssignments);

    const status = "pending";
   
        

    return (
        <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center items-center px-5">
                    <h2 className="text-4xl font-bold my-8 lg:my-10">Submitted Assignments</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-2 mb-16">
                    {   
                       status && pendingAssignments?.map((pendingAssignment) => <SubmittedAssignment key={pendingAssignment?._id} pendingAssignment={pendingAssignment} pendingAssignments={pendingAssignments} setPendingAssignments={setPendingAssignments}></SubmittedAssignment>)
                    }
                </div>
            </div>
    );
};

export default SubmittedAssignments;