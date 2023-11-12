import { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";


const Submission = () => {
    const submissionData = useLoaderData();
    const { user } = useContext(AuthContext);
    const { displayName } = user;
    const { title } = useParams();
    const status = 'pending';

   
    const [all, setAll] = useState();
    useEffect(() => {
        const findAssignmentSubmission = submissionData?.find(submissionDatum => submissionDatum?.title === title);
        setAll(findAssignmentSubmission);
    }, [title, submissionData])
    console.log(all, displayName, title, status);

    const handleTakeAssignment = e => {
        e.preventDefault();
        const pdf = e.target.pdf.value;
        const note = e.target.note.value;
        console.log(pdf, note);
        const newSubmission = {...all, displayName, status, pdf, note};
        console.log(newSubmission);
        

        //add Assignment to Submitted Assignment in DB
        fetch('https://assignment-hub-server.vercel.app/createSubmission', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSubmission)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("Assignment Submitted successfully!")
                }
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Assignment Submission Form</h1>
                    <p className="py-6 hero-overlay text-white mt-2 p-2 text-2xl">You can submit assignment here and then wait to get your marks.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleTakeAssignment} className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text"> PDF link
                                    submission</span>
                            </label>
                            <input type="text" name="pdf" placeholder="PDF link" className="input input-bordered " required />
                            <label className="label">
                                <span className="label-text">Quick Note</span>
                            </label>
                            <input type="text" name="note" placeholder="Quick Note" className="input input-bordered " required />
                        </div>
                        <div className="form-control mt-0">
                            <input className="btn accent bg-yellow-400" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Submission;