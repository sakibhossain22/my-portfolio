import { Link } from 'react-router-dom';
import myImage from '../../assets/banner-my.png';
const Banner = () => {
    return (
        <div className='flex items-center justify-between gap-5 my-10'>
            <div className='w-7/12 flex items-center justify-center'>
                <div className=''>
                    <p className='text-gray-400 text-xl'>Welcome to my world!</p>
                    <h2 className='text-5xl font-bold my-3'>I'm Md Sakib Mia</h2>
                    <p className='text-2xl mb-5'>I am a web developer</p>
                    <p className='my-3 text-gray-400 leading-loose'>To advance my web development career by exhibiting my talents and proving that I am a quick learner and highly skilled professional. I'm always looking for new challenges that will allow me to use my abilities to their full potential, and I enjoy working with cutting-edge technology.</p>
                    <div className="flex items-center  gap-5">
                        <button className="px-6 py-2 text-black bg-white rounded">Hire Me</button>
                        <Link to='https://docs.google.com/document/d/1PYUZrSsIhwHrilXk-s3BxL0Kh3kk-WGQHUR-ddU3T64/edit?usp=sharing'>
                            <button className="px-6 py-2 bg-[#7865ff] text-white rounded">Resume</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-5/12'>
                <img className='rounded-xl' src={myImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;