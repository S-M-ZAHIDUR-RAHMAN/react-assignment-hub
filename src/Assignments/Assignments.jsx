import { useLoaderData } from "react-router-dom";
import Assignment from "../Assignment/Assignment";
import { useState } from "react";


const Assignments = () => {
    const assignments = useLoaderData();
    const [otherAssignments, setOtherAssignments] = useState(assignments);
    console.log(assignments);
    const [filterDifficultyLevel, setFilterDifficultyLevel] = useState();
    const handleAssignmentFilter = e =>{
        e.preventDefault();
        const difficulty = e.target.difficultyLevel.value;
        console.log(difficulty);
        setFilterDifficultyLevel(difficulty);
    }
   
    return (
        <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center items-center px-5">
            <h2 className="text-4xl font-bold my-8 lg:my-10">All Assignments</h2>
        </div>
                <div>
                    <form onSubmit={handleAssignmentFilter}>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Difficulty Level</span>
                        </label>
                        <label className="select">
                            <select name="difficultyLevel" className="select select-bordered w-full">
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </label>
                    </div>
                    <input type="submit" value="Search" className="btn btn-block mt-5" />
                    </form>
                </div>
                
                <div className="grid mt-10 grid-cols-1 items-center lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-2 mb-16">
                    {   
                       otherAssignments?.map((assignment) =>
                       assignment?.difficultyLevel === filterDifficultyLevel &&
                       <Assignment key={assignment?._id} assignment={assignment} otherAssignments={otherAssignments} setOtherAssignments={setOtherAssignments}></Assignment>)
                    }
                </div>
            </div>
    );
};

export default Assignments;