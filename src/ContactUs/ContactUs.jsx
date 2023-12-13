import { FaPaperPlane } from "react-icons/fa";
const ContactUs = () => {
    return (
        <div>
            <div className="card w-72 shadow-lg hover:opacity-80 glass">
                <div className="card-body flex flex-col justify-center">
                    <h2 className="card-title text-2xl font-bold text-center">Send a message and we will come back to you!</h2>
                    <div>
                    <form className="flex flex-col gap-1 md:gap-5 p-4 rounded-lg"
                        action="https://formspree.io/f/moqogbnn"
                        method="POST"
                    >
                        <label>
                            <p>Your email address:</p>
                            <input className="text-black w-full pl-1" type="email" name="email"></input>
                        </label>
                        <label>
                            <p>Your message:</p>
                            <textarea className="text-black w-full h-auto pl-1" name="message"></textarea>
                        </label>
                        {/* <!-- your other form fields go here --> */}
                        <button type="submit" className="btn btn-xs lg:btn-ghost w-full h-full  text-white text-xs lg:text-lg hover:bg-slate-200 hover:text-black p-2 mt-3">
                            <div className="flex gap-2 p-2 ">
                                <p className="text-sm">SEND</p>
                                <p className=""><FaPaperPlane /></p>
                            </div>
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;