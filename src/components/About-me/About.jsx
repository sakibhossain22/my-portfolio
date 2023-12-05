import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const About = () => {
    return (
        <div className='my-14'>
            <h1 className="text-center font-bold text-3xl">About Me</h1>
            <div className="bg-[#7865ff] w-14 mx-auto h-1"></div>
            <div className='my-5'>
                <Tabs className=' mx-auto text-center flex gap-10 justify-between'>
                    <TabList className='flex rounded h-96 flex-col gap-5 px-28 items-center justify-center bg-gray-800'>
                        <Tab className='py-4 px-14'>Skils</Tab>
                        <Tab className='py-4 px-14'>About Me</Tab>
                        <Tab className='py-4 px-14'>Education</Tab>
                    </TabList>

                    <TabPanel className='text-left'>
                        <div className='grid grid-cols-2 gap-10'>
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
                        <h2 className='text-4xl my-4 font-bold'>I'm Md Sakib Mia</h2>
                        <p className='text-xl text-gray-400'>I am a learner of Web Development and Programming.To further my web development career by demonstrating my abilities and demonstrating that I am a quick learner and knowledgeable professional. I'm always on the lookout for new challenges that will allow me to put my skills to the test, and I love working with cutting-edge technology.</p>
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
                </Tabs>
            </div>
        </div>
    );
};

export default About;