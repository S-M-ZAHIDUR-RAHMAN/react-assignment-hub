// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SubmittedAssignment from "./SubmittedAssignment";
import { useState } from "react";

const SubmittedAssignments = () => {
    const submittedAllAssignments = useLoaderData();
    const [pendingAssignments, setPendingAssignments] = useState(submittedAllAssignments);

    const status = "pending";

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center mb-5 text-4xl text-white font-bold hero-overlay mt-5 py-4">
                <h2>Submitted Assignments</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-2 mb-16">
                {
                    status && pendingAssignments?.map((pendingAssignment) => <SubmittedAssignment key={pendingAssignment?._id} pendingAssignment={pendingAssignment} setPendingAssignments={setPendingAssignments}></SubmittedAssignment>)
                }
            </div>
        </div>
    );
};

export default SubmittedAssignments;