/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Assignment = ({assignment}) => {

    const {imageURL, title, marks, difficultyLevel, userName} = assignment;
    
    return (
        <div>
            <div className="card w-72 shadow-lg hover:opacity-80 glass">
            <figure><img src={imageURL} alt="" /></figure>
            <div className="card-body flex flex-col justify-center">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p>Marks: {marks}</p>
                <p>Difficulty Level: {difficultyLevel}</p>
            </div>
            <div className="flex flex-row justify-start gap-4 ml-8 mb-4">
                <button className="btn btn-accent">View</button>
                <Link to={`/update/${title}`}><button className="btn btn-accent">Update</button></Link>
            </div>
           
        </div>
        </div>
        
    );
};

export default Assignment;