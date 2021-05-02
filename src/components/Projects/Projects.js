import React from 'react';
// import Project from '../Project/Project';
import img1 from './../../images/website-design.jpg';
import twoWheels from './../../images/twoWheels.png';
import tourMate from './../../images/tourMate.png';
import teamTracker from './../../images/TeamTracker.png';
import contentWR from './../../images/contentWR.png';
import './Projects.css';
import { Link } from 'react-router-dom';


const projects = [
    {
        id: 1,
        projectName: 'Creative Agency',
        // img1: 'https://i.ibb.co/VHyDmg0/home.png',
        img2: 'https://i.ibb.co/q913j40/order.png',
        img3: 'https://i.ibb.co/C28BKZ7/admin.png',
        description: "It is an agency website, which serves some services like web development, graphics design, mobile application design, photography etc. All the facilities of this website are listed here:<ul><li>Admin can see all order lists of the users and change the order's status by drop down menu.</li><li>Admin can add more services</li><li>Admin can make a person 'Admin' by providing those person's email.</li><li>User can order a service by providing a demo picture</li><li>User can see his all orders and order's status.</li><li>User can submit a review about a service, which are shown in the homepage randomly.</li></ul>",
        liveWebsite: 'https://creative-agency18.web.app/',
        github: 'creative-agency-client',
        technology: ['HTML5', 'CSS3', 'Bootstrap4', 'React Bootstrap', 'JavaScript', 'React.js', 'React Router', 'Material UI', 'Node.js', 'Express.js', 'MongoDB']
    },
    // {
    //     id: 2,
    //     projectName: 'Volunteer Network',
    //     img1: 'https://i.ibb.co/7zqJVjp/home1.png',
    //     img2: 'https://i.ibb.co/tKbJNwY/register.png',
    //     img3: 'https://i.ibb.co/r4SDwF9/event.png',
    //     description: "It is a website for registering volunteers in many events and manage them. I have listed below some features of it.<ul><li>Volunteers can register for work.</li><li>User and Admin can sign up and log in to this website using google.</li><li>User can register for an event.</li><li>User can see his/her all registered event list.</li><li>There is a dashboard for admin by which admin can maintain and delete the registration request of the users.</li></ul>",
    //     liveWebsite: 'https://volunteer-network18.web.app/',
    //     github: 'volunteer-network-client',
    //     technology: ['HTML5', 'CSS3', 'Bootstrap4', 'React Bootstrap', 'JavaScript', 'React JS', 'React Router', 'Material UI', 'Node JS', 'Express JS', 'MongoDB']
    // },
    // {
    //     id: 3,
    //     projectName: 'Travel Guru',
    //     img1: 'https://i.ibb.co/7vtrVkc/travelnew1.png',
    //     img2: 'https://i.ibb.co/7tCXR7J/travelnew2.png',
    //     img3: 'https://i.ibb.co/pyPhKkR/travelnew3.png',
    //     description: "It is a travel agency website. On this website, you can search for places to visit and can see the description of the spectacular places. Here are more facilities for a user. They are: <ul><li>Users can sign up using his/her email.</li><li>Users can continue using Google and Facebook shortly.</li><li>Users can read the description of the places and click 'Booking' to make a booking for that place.</li><li>Then he/she have to fill up a form containing his booking information.</li><li>After clicking start booking, he/she can see the list of hotels along with a google map.</li></ul>",
    //     liveWebsite: 'https://travel-guru-roky.web.app/',
    //     github: 'travel-guru',
    //     technology: ['HTML5', 'CSS3', 'Bootstrap4', 'React Bootstrap', 'JavaScript', 'React JS', 'React Router', 'Material UI']
    // },
    // {
    //     id: 4,
    //     projectName: 'Kocur Chara',
    //     img1: 'https://i.ibb.co/Y2Y6KHy/kocu.jpg',
    //     img2: 'https://i.ibb.co/C8NCr45/kocu2.jpg',
    //     img3: 'https://i.ibb.co/ngPghgZ/kocu3.jpg',
    //     description: 'It is a website that provides courses like Coursera, Udemy, etc. Its features are listed here:<ul><li>Users can add a course to his cart.</li><li>Users can see the total amount of price of those his/her enrolled courses.</li><li>Users can see the discount amount of that price.</li><li>Users can see the net price lastly.</li></ul>',
    //     liveWebsite: 'https://kocur-chara.netlify.app/',
    //     github: 'kocur-chara',
    //     technology: ['HTML5', 'CSS3', 'Bootstrap4', 'JavaScript', 'React JS']
    // },
    // {
    //     id: 5,
    //     projectName: 'Grade Calculation',
    //     img1: 'https://i.ibb.co/mbZMqQM/grade2.jpg',
    //     img2: 'https://i.ibb.co/LCBVcnZ/grade1.jpg',
    //     img3: 'https://i.ibb.co/m0fDfM1/grade3.jpg',
    //     description: "It is a website for students to calculate their grades providing their numbers of many subjects. I have listed its features below:<ul><li>Varsity students can get a semester grade providing how many courses, every course's name, credit, and number(%) of a semester.</li><li>For getting the grade, at first he/she has to input how many courses are in that semester.</li><li>Then he/she has to fill up a form including course name, credit, and number. After providing this, if he clicks the 'submit' button, he can get his grade.</li><li>PSC students, JSC students, SSC students, and HSC students can get also their grades providing their numbers of all subjects.</li></ul>",
    //     liveWebsite: 'https://rokydas.github.io/grade-calculation/',
    //     github: 'grade-calculation',
    //     technology: ['HTML5', 'CSS3', 'Bootstrap4', 'JavaScript']
    // },
    // {
    //     id: 6,
    //     projectName: 'Sabitri Ashrom',
    //     img1: 'https://i.ibb.co/TLVWRZ6/sabitri1.jpg',
    //     img2: 'https://i.ibb.co/FXSpp8v/sabitri2.jpg',
    //     img3: 'https://i.ibb.co/Rgbz9tg/sabitri3.jpg',
    //     description: "It is a temple website. The temple committee will store the temple's information on this website. Its features are listed below:<ul><li>People can know about the temple.</li><li>People can read blogs about this temple.</li><li>People can see the all events of the temple.</li><li>People can see the committee list of the temple.</li><li>Logged in people can see the donation list of the temple.</li><li>People can see Durga Puja's photos and videos of this temple.</li><li>Committee members can manage the website's information.</li></ul>",
    //     liveWebsite: 'https://rokydas.github.io/sabitri-asrom/',
    //     github: 'sabitri-asrom',
    //     technology: ['HTML5', 'CSS3', 'Bootstrap4']
    // }

]

const Projects = () => {
    return (

        <div>
            <div>
                <h3 className="App">Recent Projects: Samples of some of my work from the past year.</h3>
            </div>
            <div style={{ border: '3px solid black', padding: '0', margin: '4em' }}>
                {/* {
                    projects.map(project => <Project key={project.id} project={project} />)
                } */}

                <div class="pb-4  shadow  mb-5 bg-body rounded">
                    <div class="card mb-3" >
                        <div class="image_container App">
                            {/* <div> */}
                                <img src={twoWheels} class="card-img-top" alt="..." style={{opacity:'0.2', height: '50vh', width: 'inherit' }} />
                            {/* </div> */}
                            <div class="middle">
                                <a  href="https://assignment-10-zodgin.web.app/" ><button type="button" class="btn btn-outline-secondary m-2 w-100" >Live</button></a> 
                                <a href="https://github.com/Rifat-Shadman/Two_Wheels"><button type="button" class="btn btn-outline-secondary m-2 w-100">Github</button></a> 
                            </div>
                        </div>

                        <div class="card-body ms-5">
                            <h5 class="card-title">Two Wheels</h5>
                            <div class="card-text">E-Commerce </div>
                            <div class="card-text text-muted"> ReactJS | MongoDB</div>
                        </div>
                    </div>
                </div>


                <div class="pb-4 shadow p-3 mb-5 bg-body rounded">
                    <div class="card mb-3" >
                        <div class="image_container App">
                            {/* <div> */}
                                <img src={tourMate} class="card-img-top" alt="..." style={{opacity:'0.2', height: '50vh', width: '90%' }} />
                            {/* </div> */}
                            <div class="middle">
                            <button type="button" class="btn btn-outline-secondary m-2 w-100">Live</button>
                                <button type="button" class="btn btn-outline-secondary m-2 w-100">Github</button>
                            </div>
                        </div>

                        <div class="card-body ms-5">
                            <Link to="/tourmate"><h5 class="card-title" target="_blank" >TourMate</h5></Link>
                            
                            <div class="card-text">E-Ticket | Booking | </div>
                            <div class="card-text text-muted">ReactJS | MongoDB | Firebase</div>
                            
                        </div>
                    </div>
                </div>





                <div class="pb-4 shadow p-3 mb-5 bg-body rounded">
                    <div class="card mb-3" >
                        <div class="image_container App">
                            {/* <div> */}
                                <img src={teamTracker} class="card-img-top" alt="..." style={{opacity:'0.2', height: '50vh', width: '100%' }} />
                            {/* </div> */}
                            <div class="middle">
                            <button type="button" class="btn btn-outline-secondary m-2 w-100" >Live</button>
                                <button type="button" class="btn btn-outline-secondary m-2 w-100">Github</button>
                            </div>
                        </div>

                        <div class="card-body ms-5">
                            <h5 class="card-title">Team Tracker</h5>
                            <div class="card-text">Football Team Database</div>
                            <div class="card-text text-muted">ReactJS | Netlify</div>
                        </div>
                    </div>
                </div>




                <div class="pb-4 shadow p-3 mb-5 bg-body rounded">
                    <div class="card mb-3" >
                        <div class="image_container App">
                            {/* <div> */}
                                <img src={contentWR} class="card-img-top" alt="..." style={{opacity:'0.2', height: '50vh', width: 'inherit' }} />
                            {/* </div> */}
                            <div class="middle">
                            <button type="button" class="btn btn-outline-secondary m-2 w-100" >Live</button>
                                <button type="button" class="btn btn-outline-secondary m-2 w-100">Github</button>
                            </div>
                        </div>

                        <div class="card-body ms-5">
                            <Link to="/contentWR"><h5 class="card-title" target="_blank" >ContentWR</h5></Link>
                            {/* <h5 class="card-title">ContentWR</h5> */}
                            <div class="card-text">Content Writing | Blogs | Banners</div>
                            <div class="card-text text-muted">ReactJS | MongoDB | Firebase | Heroku</div>
                        </div>
                    </div>
                </div>




                <div class="pb-4 shadow p-3 mb-5 bg-body rounded">
                    <div class="card mb-3" >
                        <div class="image_container App">
                            {/* <div> */}
                                <img src={img1} class="card-img-top" alt="..." style={{opacity:'0.2', height: '50vh', width: 'inherit' }} />
                            {/* </div> */}
                            <div class="middle">
                            <button type="button" class="btn btn-outline-secondary m-2 w-100" >Live</button>
                                <button type="button" class="btn btn-outline-secondary m-2 w-100">Github</button>
                            </div>
                        </div>

                        <div class="card-body ms-5">
                            <h5 class="card-title">Creative Agency</h5>
                            <div class="card-text">It is an agency website, which serves some services like web development, graphics design, mobile application design, photography etc. All the facilities of this website are listed here:
                            </div>
                            
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Projects;