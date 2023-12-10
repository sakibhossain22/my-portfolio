import { Link } from "react-scroll";


const ContactInfo = () => {
    return (
        <div className="mx-5" id='touch'>
            <h1 className="text-center font-bold text-3xl  mb-3">Contact <span className="text-[#02c9d4]">Me !</span></h1>
            <div className="bg-[#02c9d4] w-14 mx-auto h-1"></div>
            <div className="flex flex-col gap-3 lg:gap-10 lg:flex-row justify-between lg:p-8">
                <div className="lg:w-4/6 w-full mx-auto py-2 lg:p-0">
                    
                    <form>
                        <div className="mb-7 flex items-center gap-5">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-3 bg-gray-700 rounded-md w-full"
                                placeholder="Full Name"
                            />
                            <input
                                type="email"
                                id="name"
                                name="name"
                                className="mt-1 p-3 bg-gray-700 rounded-md w-full"
                                placeholder="Your E-mail"
                            />
                        </div>
                        <div className="mb-7 flex items-center gap-5">
                            <input
                                type="number"
                                id="name"
                                name="name"
                                className="mt-1 p-3 bg-gray-700 rounded-md w-full"
                                placeholder="Your Phone Number"
                            />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-3 bg-gray-700 rounded-md w-full"
                                placeholder="Your E-mail Subject"
                            />
                        </div>
                        <div>
                            <textarea name="" className="w-full bg-gray-700 p-3" id="" placeholder="Your Messages" cols="30" rows="10"></textarea>
                        </div>
                        <Link className="flex items-center justify-center my-3">
                        <button
                            type="submit"
                            className="bg-[#02c9d4] text-black font-bold px-6 py-2 rounded-lg"
                        >
                            Your Message
                        </button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
