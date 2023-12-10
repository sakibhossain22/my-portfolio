

const ContactInfo = () => {
    return (
        <div className="mx-auto" id='touch'>
            <h1 className="text-center font-bold text-3xl  mb-3">Contact</h1>
            <div className="bg-[#7865ff] w-14 mx-auto h-1"></div>
            <div className="flex flex-col gap-3 lg:gap-10 lg:flex-row justify-between lg:p-8">
                <div className="lg:w-2/6 w-full py-2 lg:p-0">
                    
                    <form>
                        <h1 className='text-gray-400 text-center'>Contact Form</h1>
                        <div className="mb-7">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-2  rounded-md w-full"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-7">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 p-2  rounded-md w-full"
                                placeholder="Your Phone"
                            />
                        </div>
                        <div className="mb-7">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-2  rounded-md w-full"
                                placeholder="Your Email"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 w-full text-white p-2 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
