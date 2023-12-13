import swal from "sweetalert";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Providers/AuthProvider";


const CreateAssignments = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(AuthContext);
    const userName = user.displayName;
    const [formErrors, setFormErrors] = useState({});


    const handleCreateAssignment = e => {
        e.preventDefault();

        //Validation create Assignment
        const errors = {};
        if(!e.target.title.value.trim()){
            errors.title = "Title is required";
        }
        if(Object.keys(errors).length>0){
            setFormErrors(errors);
            return;
        }
        setFormErrors({});


        const form = e.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const description = form.description.value;
        const difficultyLevel = form.difficultyLevel.value;
        const imageURL = form.imageURL.value;
        // const dueDate = form.dueDate.value;
        
        const newAssignment = { title, marks, description, difficultyLevel, imageURL, startDate, userName };
        console.log(newAssignment);

        //send data to the server
        fetch('https://assignment-hub-server.vercel.app/createAssignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    swal("Assignment created successfully!")
                }
            })

    }


    return (
        <div className="pt-5 lg:pt-10 md:pt-10 flex flex-col items-center">
            <div className="flex flex-row justify-center mb-5 text-4xl text-white font-bold hero-overlay py-4">
                <h2>Create an Assignment</h2>
            </div>

            <form onSubmit={handleCreateAssignment}>
                {/* Form Row */}
                <div className="md:flex md:mb-8 md:gap-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-white">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-white">Marks</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="marks" placeholder="Marks" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                </div>
                {/* Form Row */}
                <div className="md:flex md:mb-8 md:gap-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-white">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Difficulty Level</span>
                        </label>
                        <label className="select">
                            <select name="difficultyLevel" className="select select-bordered w-full text-black">
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
                            <span className="label-text text-white">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="imageURL" placeholder="Image URL" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                </div>
                {/* Form Row */}
                <div className="mb-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Due Date</span>
                        </label>
                        <div className="text-black">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                </div>
                <input type="submit" value="Create Assignment" className="btn btn-block" />
            </form>
            {formErrors?.title && <span className="text-red-600 font-bold text-xl mt-4">{formErrors?.title}</span>}

        </div>
    );
};

export default CreateAssignments;
