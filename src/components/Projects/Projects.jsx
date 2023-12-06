import { Link } from 'react-router-dom';
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
const Projects = () => {
    return (
        <div id='projects'>
            <h1 className="text-center font-bold text-3xl mb-3">Projects</h1>
            <div className="bg-[#7865ff] w-14 mx-auto h-1"></div>
            <div className='my-10'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                    {[
                        { title: "Parcel Pulce", description: "Streamlined e-commerce platform for effortless parcel booking, personalized delivery options, and seamless tracking.", link: 'https://parcelpulce.web.app/', img: img1 },
                        { title: "Quick Bite", description: "Your go-to app for fast and convenient food delivery, offering a variety of delicious options.", link: 'https://quickbite-8faa4.web.app/', img: img2 },
                        { title: "Sweet Shop", description: "Indulge in a delightful array of handcrafted sweets and treats, perfect for every sweet tooth.", link: 'https://sweet-shop-cc170.web.app/', img: img3 }
                    ].map((item, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl transform transition-transform hover:scale-105">
                            <figure><img src={item.img} alt={item.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-bold">{item.title}</h2>
                                <p className='text-gray-400'>{item.description}</p>
                                <div className="card-actions justify-end">
                                    <Link to={item.link}><button className="bg-green-600 px-6 py-2 rounded">Live</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Projects;