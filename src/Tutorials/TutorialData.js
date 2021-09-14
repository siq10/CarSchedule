import React  from "react";
import { tutorialActions } from '../_actions/tutorial_actions';
import "./TutorialData.css"
import {
    Link,
  } from "react-router-dom";
  
function TutorialData(props) {
    const openTutorial = () =>
    {
        
    }
    return (
        <div>
            <ul>
            {
                props.tutorials.map((tutorial, index) => {
                    return <li key={index}>
                        <Link to={ {pathname: `/tutorials/${tutorial.title.replace(/ /g,"_")}`, state:tutorial} }>
                            <section>
                                <h4 >{tutorial.title}</h4>
                            </section>
                        </Link>

                    </li>
            })
            }
            </ul>
        </div>
    )
}

export default TutorialData