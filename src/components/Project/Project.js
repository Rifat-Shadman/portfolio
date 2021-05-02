// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import { Badge } from 'react-bootstrap';
import React from 'react';
const Project = ({ project }) => {

    const { projectName, img1, img2, img3, description, liveWebsite, github, id, technology } = project;

    return (
        <div>
            <div class="card bg-dark text-white" style={{alignItems:'center'}}>
                <img src={img1} class="card-img" alt="..." style={{height:'50vh', width:'50vw'}}/>
                    <div class="card-img-overlay">
                        <h5 class="card-title">{projectName}</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
            </div>
        </div>

    )
};

export default Project;