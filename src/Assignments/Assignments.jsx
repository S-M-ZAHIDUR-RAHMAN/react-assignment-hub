import { useLoaderData } from "react-router-dom";
import Assignment from "../Assignment/Assignment";
import { useState } from "react";


const Assignments = () => {
    const assignments = useLoaderData();
    console.log(assignments);
    // const [filterDifficultyLevel, setFilterDifficultyLevel] = useState('');
    // setFilterDifficultyLevel('')
    // const handleAssignmentFilter = e =>{
    //     e.preventDefault();
    //     const difficulty = e.target.difficultyLevel.value;
    //     setFilterDifficultyLevel(difficulty);
    // }
   
    return (
        <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center items-center px-5">
                    <h2 className="text-4xl font-bold my-8 lg:my-10">All Assignments</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-2 mb-16">
                    {   
                        assignments?.map((assignment) => <Assignment key={assignment?._id} assignment={assignment}></Assignment>)
                    }
                </div>
            </div>
    );
};

export default Assignments;