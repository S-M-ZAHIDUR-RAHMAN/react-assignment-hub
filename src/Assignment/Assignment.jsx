/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Providers/AuthProvider";


const Assignment = ({ assignment, otherAssignments, setOtherAssignments }) => {

    const { imageURL, title, marks, difficultyLevel, userName, _id } = assignment;

    const {user} = useContext(AuthContext);
    const displayName = user?.displayName;


    const handleDelete = id => {
        // console.log(id);
        if(displayName===userName){
            
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        console.log('delete confirmed');
                        fetch(`http://localhost:5000/createAssignment/${id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.deletedCount > 0) {
                                    swal("Your product has been deleted!", {
                                        icon: "success",
                                    });
                                    //remove the product from the UI
                                    const remainingAssignments = otherAssignments?.filter(otherAssignment => otherAssignment?._id !== id);
                                    setOtherAssignments(remainingAssignments);
    
                                }
                            })
                    }
                });
        }
        else{
            swal("You are not authorized to delete this!", {
                icon: "warning",
            });
        }
    }
        return (
            <div>
                <div className="card w-72 shadow-lg hover:opacity-80 glass">
                    <figure><img src={imageURL} alt="" /></figure>
                    <div className="card-body flex flex-col justify-center">
                        <h2 className="card-title text-2xl font-bold">{title}</h2>
                        <p>Marks: {marks}</p>
                        <p>Difficulty Level: {difficultyLevel}</p>
                    </div>
                    <div className="flex flex-row justify-start gap-1 ml-8 mb-4">
                        <button className="btn btn-accent">View</button>
                        <Link to={`/update/${title}`}><button className="btn btn-accent">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-accent">Delete</button>
                    </div>

                </div>
            </div>

        );
    };

    export default Assignment;