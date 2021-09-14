import React , { useEffect} from "react";
import {
    useLocation
  } from "react-router-dom";
function TutorialPresentation(props) {
    const location = useLocation();
    const tutorial = props.location.state
    useEffect(() => {
        console.log(location)

      }, []);
    return (
        <article>
            <h3> {tutorial.title}</h3>
            <h4> Complexity level: {tutorial.difficulty}</h4>
            <p>{tutorial.content}</p>
            {
                typeof tutorial.url !== 'undefined' ?
                <iframe width="500" height="315" src="https://www.youtube.com/embed/TJwrXI4ftIM" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe> :
                null
            }
        </article>
    )

}
export default TutorialPresentation