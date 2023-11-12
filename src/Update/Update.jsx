import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../Providers/AuthProvider';
import swal from 'sweetalert';

const Update = () => {

    const { user } = useContext(AuthContext);
    const assignments = useLoaderData();
    const { title } = useParams();
    const [update, setUpdate] = useState();
    const [startDate, setStartDate] = useState(new Date());


    const userName = user.displayName;

    console.log(title);
    console.log(assignments);

    useEffect(() => {
        if (assignments) {
            const findAssignmentToUpdate = assignments?.find(assignment => assignment?.title === title);
            setUpdate(findAssignmentToUpdate);
        }

    }, [title, assignments])
    console.log(update);


    const handleUpdateAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const description = form.description.value;
        const difficultyLevel = form.difficultyLevel.value;
        const imageURL = form.imageURL.value;
        // const dueDate = form.dueDate.value;

        const updatedAssignment = { title, marks, description, difficultyLevel, imageURL, startDate, userName };
        console.log(updatedAssignment);

        //update assignment data in the server
        fetch(`https://assignment-hub-server.vercel.app/createAssignment/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Product updated successfully!")
                }
            })

    }

    return (
        <div className="pt-5 lg:pt-10 md:pt-10 flex flex-col items-center">
            <div className="flex flex-row justify-center mb-5 text-4xl text-white font-bold hero-overlay py-4">
                <h2>Update an Assignment</h2>
            </div>

            <form onSubmit={handleUpdateAssignment}>
                {/* Form Row */}
                <div className="md:flex md:mb-8 md:gap-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" defaultValue={update?.title} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="marks" defaultValue={update?.marks} placeholder="Marks" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form Row */}
                <div className="md:flex md:mb-8 md:gap-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={update?.description} placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
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
                </div>
                {/* Form Row */}
                <div className="mb-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="imageURL" defaultValue={update?.imageURL} placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form Row */}
                <div className="mb-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Date</span>
                        </label>
                        <div className="border pl-3">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                </div>
                <input type="submit" value="Update Assignment" className="btn btn-block" />
            </form>

        </div>
    );
};

export default Update;