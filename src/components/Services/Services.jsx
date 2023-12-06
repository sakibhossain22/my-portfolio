import { FaCode, FaCodeFork, FaUikit } from "react-icons/fa6";

const Services = () => {
    return (
        <div className="mx-4" id='services'>
            <h1 className="text-center font-bold text-3xl mb-3">Services</h1>
            <div className="bg-[#7865ff] w-14 mx-auto h-1"></div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-14 my-10">
                {[
                    { icon: <FaCode className="text-3xl text-[#dc3545]" />, title: "Web Design", description: "Our web design services focus on creating captivating, user-friendly websites. We specialize in responsive design, ensuring your site looks and functions flawlessly across all devices. Our goal is to enhance your online presence with visually appealing and effective designs that engage your target audience. give high level design" },
                    { icon: <FaUikit className="text-3xl text-[#dc3545]" />, title: "UI / UX", description: "Our UI/UX design services prioritize user-centric experiences. We craft intuitive, visually appealing interfaces that enhance user engagement and satisfaction. From wireframing to prototyping, we focus on creating designs that drive positive interactions and conversions, ultimately ensuring your digital product's success" },
                    { icon: <FaCodeFork className="text-3xl text-[#dc3545]" />, title: "Web Development", description: "We offer a range of services, including web development for stunning websites and software development for tailored applications. Our expertise covers responsive design, e-commerce, SEO, security, and API integration. We create user-friendly web experiences and custom software solutions to meet your business needs and digital goals." }
                ].map((service, index) => (
                    <div key={index} className="bg-[#253869] px-4 py-8 rounded-lg transform transition-transform hover:translate-y-[-15px]">
                        {service.icon}
                        <h1 className="text-white my-4 text-3xl font-bold">{service.title}</h1>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Services;