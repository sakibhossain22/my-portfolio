import { Link } from 'react-router-dom';
import myImage from '../../assets/banner-my.png';
const Banner = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse items-center justify-between gap-5 my-10'>
            <div className='lg:w-7/12 flex items-center justify-center'>
                <div>
                    <p className='text-gray-400 text-xl'>Welcome to my world!</p>
                    <h2 className='lg:text-5xl text-3xl font-bold my-3'>I'm Md Sakib Mia</h2>
                    <p className='lg:text-2xl mb-5'>I am a web developer</p>
                    <p className='my-3 text-gray-400 leading-loose'>To advance my web development career by exhibiting my talents and proving that I am a quick learner and highly skilled professional. I'm always looking for new challenges that will allow me to use my abilities to their full potential, and I enjoy working with cutting-edge technology.</p>
                    <div className="flex items-center lg:justify-center gap-5">
                        <button className="px-6 py-2 text-black bg-white rounded">Hire Me</button>
                        <Link to='https://drive.google.com/u/0/uc?id=1msaGOBK7O7u5vJXPt95h4Qqc2rMj151W&export=download'>
                            <button className="px-6 py-2 bg-[#7865ff] text-white rounded">Resume</button>
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