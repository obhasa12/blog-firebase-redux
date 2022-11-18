import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const {id} = useParams()
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis eligendi sunt enim, amet dolorum exercitationem tempora? Asperiores, sit? Nihil quas quisquam quidem? Accusantium, fuga rem explicabo natus nihil aspernatur!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Moyi Miyi</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
      );
}
 
export default ProjectDetails;