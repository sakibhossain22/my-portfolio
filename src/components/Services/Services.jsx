import { FaCode, FaCodeFork, FaUikit } from "react-icons/fa6";

const Services = () => {
    return (
        <div className="mx-4" id='services'>
            <h1 className="text-center font-bold text-3xl mb-3">My <span className="text-[#02c9d4]">Services</span></h1>
            <div className="bg-[#02c9d4] w-14 mx-auto h-1"></div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-14 my-10">
                {[
                    { icon: <FaCode className="text-3xl text-[#02c9d4] mx-auto" />, title: "Web Design", description: "Captivating, user-friendly websites. Specializing in responsive design, ensuring flawless functionality across all devices." },
                    { icon: <FaUikit className="text-3xl text-[#02c9d4] mx-auto" />, title: "UI / UX", description: "Crafting intuitive, visually appealing interfaces. From wireframing to prototyping, driving positive interactions and conversions." },
                    { icon: <FaCodeFork className="text-3xl text-[#02c9d4] mx-auto" />, title: "Web Development", description: "Expertise in responsive design, e-commerce, SEO, security, and API integration. Creating user-friendly web experiences and custom software solutions." }
                ].map((service, index) => (
                    <div key={index} className="bg-[#253869] px-4 py-8 rounded-lg text-center transform transition-transform hover:translate-y-[-15px] hover:border-[#02c9d4] border-2 border-[#253869]">
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