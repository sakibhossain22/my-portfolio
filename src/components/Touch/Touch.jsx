

const ContactInfo = () => {
    return (
        <div className="w-5/6 mx-auto">
            <h1 className="text-center font-bold text-3xl">Services</h1>
            <div className="bg-[#7865ff] w-14 mx-auto h-1"></div>
            <div className="flex justify-between p-8">
                {/* Left Div */}
                <div>
                    <div className="bg-gray-800 mb-4 p-6 rounded">
                        <strong>Address:</strong> 123 Main Street, Cityville
                    </div>
                    <div className="bg-gray-800 mb-4 p-6 rounded">
                        <strong>Phone:</strong> +8801996818622
                    </div>
                    <div className="bg-gray-800 mb-4 p-6 rounded">
                        <strong>Email:</strong> sakib01181@gmail.com
                    </div>
                    <div className="bg-gray-800 mb-4 p-6 rounded">
                        <strong>Location:</strong>Sherpur Mymensingh, Bangladesh
                    </div>
                </div>

                {/* Right Div - Form */}
                <div className="w-2/6">
                    
                    <form>
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
