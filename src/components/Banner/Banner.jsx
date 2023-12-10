import { Link } from 'react-router-dom';
import myImage from '../../assets/banner-my.png';
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse items-center justify-between gap-5 my-10'>
            <div className='lg:w-7/12 flex items-center justify-center'>
                <div>
                    <p className='text-gray-400 text-2xl'>Hello It's Me !</p>
                    <h2 className='lg:text-6xl text-3xl font-bold my-3'>Sakib Mia</h2>
                    <p className='lg:text-2xl mb-5'>I am a Web <span className='text-[#02c9d4]'>Developer</span></p>
                    <p className='my-3 text-gray-400 leading-loose'>To advance my web development career by exhibiting my talents and proving that I am a quick learner and highly skilled professional. I'm always looking for new challenges that will allow me to use my abilities to their full potential, and I enjoy working with cutting-edge technology.</p>
                    <div className='flex items-center gap-6 my-5'>
                        <Link to='https://www.facebook.com/Sakib.Hossain97' className='transition-all duration-300 ease-in-out transform hover:scale-110'>
                            <FaFacebookF className='text-[#02c9d4] text-3xl rounded-full border-2 border-[#02c9d4] p-1 hover:bg-[#02c9d4] hover:text-black'></FaFacebookF>
                        </Link>
                        <Link to='https://www.linkedin.com/in/sakibhossain22' className='transition-all duration-300 ease-in-out transform hover:scale-110'>
                            <FaLinkedinIn className='text-[#02c9d4] text-3xl rounded-full border-2 border-[#02c9d4] p-1 hover:bg-[#02c9d4] hover:text-black'></FaLinkedinIn>
                        </Link>
                        <Link to='https://github.com/sakibhossain22' className='transition-all duration-300 ease-in-out transform hover:scale-110'>
                            <FaGithub className='text-[#02c9d4] text-3xl rounded-full border-2 border-[#02c9d4] p-1 hover:bg-[#02c9d4] hover:text-black'></FaGithub>
                        </Link>
                        <Link to='https://www.instagram.com/sakib.hossain97' className='transition-all duration-300 ease-in-out transform hover:scale-110'>
                            <FaInstagram className='text-[#02c9d4] text-3xl rounded-full border-2 border-[#02c9d4] p-1 hover:bg-[#02c9d4] hover:text-black'></FaInstagram>
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <Link to='https://drive.google.com/u/0/uc?id=1msaGOBK7O7u5vJXPt95h4Qqc2rMj151W&export=download'>
                            <button className="px-6 py-2 bg-[#02c9d4] text-gray-800 font-bold rounded-xl">Download Resume</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='lg:w-5/12'>
                <img className='rounded-xl' src={myImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;