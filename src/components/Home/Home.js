import React from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import developerImage from './../../images/web-developers.jpg';
import './Home.css';

const Home = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_kv8n5sk', 'template_hf9bcei', e.target, 'user_pryiNqXY7ghNm5inrpskK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }



    return (
        <div class="App container justify-content-center mb-3">
            <section class="align-items-center" style={{height:'20em', display:'flex', justifyContent:'center'}}>
                <div>
                    <h2 class="mb-3">Hello, my name is <span style={{color:"coral"}}>Rifat Shadman</span>. <br /> I am a Designer / Front End Developer living in Dhaka, BD.</h2>

                    <Link to="/public/files/resume_MERN_Rifat_Shadman.pdf" target="_blank" download>
                        < button type="button" class="btn btn-outline-secondary m-2 ">Download Resume</button>
                    </Link>
                </div>

            </section>
            <section class="m-3">
                <div class="card bg-dark text-white">
                    <img src={developerImage} class="card-img" alt="..."></img>

                </div>
            </section>

            <section class="inner-container space-bottom" style={{margin:'10rem 0'}}>
                <h3>About</h3>
                <p >I currently am pursuing by Bachelor's Degree in Information and Communication Engineerng from Pabna University of Science and Technology. Alongside, I have been practicing web development as it is my passion and I have my goals set to become a professional web developer one day. <br/> <br/> Officiis reprehenderit, sint consectetur in quaerat, architecto libero, eius impedit eum dolorum aut nobis distinctio odio! Qui possimus facilis sed iusto dolore unde tempora earum obcaecati dicta quae neque, ex incidunt tenetur et non molestiae explicabo. Labore maiores vero a et, dolorum obcaecati ad sequi nobis. Eius quos sit earum adipisci error aspernatur doloremque, placeat, soluta cumque dolorum, atque quibusdam fugit consequuntur nisi unde autem harum reiciendis voluptatum. Quam nam pariatur dicta sit, laborum ea sed cupiditate ipsa magni corporis doloremque esse? Ab in eos repellat exercitationem, fuga eaque dolore consectetur nihil quaerat reprehenderit distinctio, tenetur voluptatem quas, dignissimos earum autem aliquam corporis ipsa incidunt sint illo quod explicabo eligendi. Unde quis in omnis! Unde odit quo architecto consequatur. </p>
            </section>
            
            
            <section class="shadow p-3 mb-5 bg-body rounded">
                {/* <div>
                    <h3>Interested in doing a project together?</h3>
                    <a href="mailto:r.shadman.j@gmail.com" class="cta-button">Email Me <span class="arrow-right">→</span></a>
                </div> */}
                <div>
                    <h2>Interested in doing a project together?</h2>
                </div>
                <div className="container">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Your Name" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Email"></input>
                            </div>
                        </div>
                    </form>
                </div>

            </section>

        </div>
    );
};

export default Home;