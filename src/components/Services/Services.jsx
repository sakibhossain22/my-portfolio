import { FaCode, FaCodeFork, FaUikit } from "react-icons/fa6";

const Services = () => {
    return (
        <div className="mx-4">
            <h1 className="text-center font-bold text-3xl">Services</h1>
            <div className="bg-[#7865ff] w-14 mx-auto h-1"></div>
            <div className="flex items-center justify-center gap-14 my-10">
                <div className="bg-[#253869] px-4 py-8 rounded-lg">
                    <FaCode className="text-3xl text-[#dc3545]"></FaCode>
                    <h1 className="text-white my-4 text-3xl font-bold">Web Design</h1>
                    <p className="text-gray-400">Our web design services focus on creating captivating, user-friendly websites. We specialize in responsive design, ensuring your site looks and functions flawlessly across all devices. Our goal is to enhance your online presence with visually appealing and effective designs that engage your target audience.</p>
                </div>
                <div className="bg-[#253869] px-4 py-8 rounded-lg">
                    <FaUikit className="text-3xl text-[#dc3545]"></FaUikit>
                    <h1 className="text-white my-4 text-3xl font-bold">UI / UX</h1>
                    <p className="text-gray-400">Our UI/UX design services prioritize user-centric experiences. We craft intuitive, visually appealing interfaces that enhance user engagement and satisfaction. From wireframing to prototyping, we focus on creating designs that drive positive interactions and conversions, ultimately ensuring your digital product's success</p>
                </div>
                <div className="bg-[#253869] px-4 py-8 rounded-lg">
                    <FaCodeFork className="text-3xl text-[#dc3545]"></FaCodeFork>
                    <h1 className="text-white my-4 text-3xl font-bold">Web Development</h1>
                    <p className="text-gray-400">We offer a range of services, including web development for stunning websites and software development for tailored applications. Our expertise covers responsive design, e-commerce, SEO, security, and API integration. We create user-friendly web experiences and custom software solutions to meet your business needs and digital goals.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;