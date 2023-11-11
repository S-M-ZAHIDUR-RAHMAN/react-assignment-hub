import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import swal from "sweetalert";


const Marking = () => {


    const markingData = useLoaderData();
    const { user } = useContext(AuthContext);
    const { displayName } = user;
    const { title } = useParams();
   


    const [mark, setMark] = useState();
    useEffect(() => {
        const findAssignmentMark = markingData?.find(markingDatum => markingDatum?.title === title);
        setMark(findAssignmentMark);
    }, [title, markingData])
    console.log(markingData, title);


    const handleMarkAssignment = e => {
        e.preventDefault();
        const marking = e.target.marking.value;
        const feedback = e.target.feedback.value;
        console.log(marking, feedback);
        const newMark = { ...mark, marking, feedback };
        console.log(newMark);

        //add Assignment to Submitted Assignment in DB [PATCH]
        fetch(`http://localhost:5000/createSubmission/${mark._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: "completed"})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Marked successfully!")
                }
            })

            // add Assignment to Submitted Assignment in DB [PUT]
        fetch(`http://localhost:5000/createSubmission/${mark._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMark)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Thank you for your valuation!")
                }
            })
    }
    return (
        <div className="flex flex-row justify-center my-10">
            <div className="card w-72 h-120 shadow-lg hover:opacity-80 glass py-3 pl-2">
                <div className="flex flex-col justify-center">
                    <h2 className="card-title text-2xl font-bold">{mark?.title}</h2>
                    <p>PDF Link:</p>
                    <input className="border mr-2" type="text" defaultValue={mark?.pdf} />
                    <p>Note: {mark?.note}</p>
                </div>
                <div>
                    <form onSubmit={handleMarkAssignment} className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text"> Input Marks</span>
                            </label>
                            <input type="text" name="marking" placeholder="Give mark" className="input input-bordered " required />
                            <label className="label">
                                <span className="label-text">Input Feedback</span>
                            </label>
                            <input type="text" name="feedback" placeholder="Feedback" className="input input-bordered " required />
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

export default Marking;