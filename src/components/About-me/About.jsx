import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const About = () => {
    return (
        <div className='my-14' id='about'>
            <h1 className="text-center font-bold text-3xl  mb-3">About Me</h1>
            <div className="bg-[#7865ff] w-14 mx-auto h-1"></div>
            <div className='my-5 mx-5'>
                <Tabs className=' mx-auto text-center lg:grid grid-cols-12 gap-8 justify-center'>
                    <div className='lg:col-span-4'>
                        <TabList className='flex my-2 py-5 rounded lg:flex-col gap-2 lg:px-10 items-center justify-center bg-gray-800'>
                            <Tab className='lg:py-4  py-2 lg:px-14 px-4 '>Skils</Tab>
                            <Tab className='lg:py-4  py-2 lg:px-14 px-4 '>About Me</Tab>
                            <Tab className='lg:py-4  py-2 lg:px-14 px-4 '>Education</Tab>
                        </TabList>
                    </div>

                    <div className='lg:col-span-8'>
                        <TabPanel className='text-left lg:w-full '>
                            <div className='grid grid-cols-2 gap-5'>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1>Javascript</h1>
                                        <p>95%</p>
                                    </div>
                                    <progress className="progress progress-warning w-48" value="95" max="100"></progress>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1>React Js</h1>
                                        <p>95%</p>
                                    </div>
                                    <progress className="progress progress-warning w-48" value="95" max="100"></progress>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1>Next Js</h1>
                                        <p>90%</p>
                                    </div>
                                    <progress className="progress progress-warning w-48" value="90" max="100"></progress>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1>Node Js</h1>
                                        <p>95%</p>
                                    </div>
                                    <progress className="progress progress-warning w-48" value="95" max="100"></progress>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1>Express Js</h1>
                                        <p>85%</p>
                                    </div>
                                    <progress className="progress progress-warning w-48" value="85" max="100"></progress>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1>Mongoose</h1>
                                        <p>90%</p>
                                    </div>
                                    <progress className="progress progress-warning w-48" value="90" max="100"></progress>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1>MongoDB</h1>
                                        <p>90%</p>
                                    </div>
                                    <progress className="progress progress-warning w-48" value="90" max="100"></progress>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h1>MaterialUI</h1>
                                        <p>95%</p>
                                    </div>
                                    <progress className="progress progress-warning w-48" value="95" max="100"></progress>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className='text-left'>
                            <h2 className='text-3xl my-4 font-bold'>I'm Md Sakib Mia</h2>
                            <p className='text-lg '>I am a learner of Web Development and Programming.To further my web development career by demonstrating my abilities and demonstrating that I am a quick learner and knowledgeable professional. I'm always on the lookout for new challenges that will allow me to put my skills to the test, and I love working with cutting-edge technology.</p>
                        </TabPanel>
                        <TabPanel className='text-left bg-gray-800 px-10 rounded py-4'>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead className='bg-[#7865ff] text-white py-4'>
                                        <tr>
                                            <th>Degree</th>
                                            <th>Department</th>
                                            <th>Institute</th>
                                            <th>Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>BBS</th>
                                            <td>Bussiness Studies</td>
                                            <td>Sherpur Govt College</td>
                                            <td>2022 - Present</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>HSC</th>
                                            <td>Bussiness Studies</td>
                                            <td>Sreebardi Govt College</td>
                                            <td>2019 - 2021</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>SSC</th>
                                            <td>Bussiness Studies</td>
                                            <td>Juginimura High School</td>
                                            <td>2019</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default About;