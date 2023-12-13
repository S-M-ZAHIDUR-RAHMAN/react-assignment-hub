import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import MyAssignment from "./MyAssignment";


const MyAssignments = () => {
    const { user } = useContext(AuthContext);
    const displayName = user?.displayName;
    const assignments = useLoaderData();

    return (
        <div className="flex flex-col items-center">

            <div className="flex flex-row justify-center mb-5 text-4xl text-white font-bold hero-overlay mt-5 py-4">
                <h2>My Assignments</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:items-center gap-2 mb-16">
                {
                    assignments?.map((assignment) =>
                        assignment?.userName === displayName &&
                        <MyAssignment key={assignment?._id} assignment={assignment} ></MyAssignment>)
                }
            </div>
        </div>
    );
};

export default MyAssignments;