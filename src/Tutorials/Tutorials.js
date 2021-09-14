import React, { useEffect, useState }  from "react";
import { tutorialActions } from '../_actions/tutorial_actions';
import { useDispatch, useSelector } from 'react-redux';
import TutorialData  from './TutorialData'
import "./Tutorials.css"
function Tutorials() {
    const dispatch = useDispatch()
    const [tutorials, setTutorials] = React.useState([]);
    const [categories, setCategories] = React.useState(new Map());
    const [selectedChapter, setSelectedChapter] = React.useState(-1);
    const [searchString, setSearchString] = React.useState("");
    const tutorialContainsString = (tutorial) => {
        let result = false
        const text = searchString.toLowerCase()
        if(tutorial.title.toLowerCase().includes(text)   || 
           tutorial.content.toLowerCase().includes(text) || 
           tutorial.url.toLowerCase().includes(text)       )
           {
               result = true
           }
        return result
    }
    const textedit = (e) => {
        setSearchString(e.target.value)
        // console.log(e.target.value)
    }
    const dynamicSearchList = () => {
        if(searchString.length > 1)
        {
            return tutorials.filter(tutorial => tutorialContainsString(tutorial))
        }
        else
        {
            return []
        }
    }
    const searchList = dynamicSearchList()
    const chapterArr = Array.from( categories.keys() )
    useEffect(() => { 
         dispatch(tutorialActions.getAll())
        .then(response => 
            {
                setTutorials(response)
                setCategories(tutorialActions.getCategories(response))
            })
        .catch(err => console.log(err)); 
        }, []);
    return (
        <>
        <h2>Tutorials</h2> 
        <section className="searchContainer"> 
            <label htmlFor="lesson_search">Search for a particular tutorial:</label>
            <input type="search" id="lesson_search" name="lesson_search" value={searchString} onChange={textedit} placeholder="At least two characters..."></input>
            {
                searchString.length > 1 ? 
                searchList.length !== 0 ? <TutorialData tutorials={searchList}></TutorialData> : <p>No tutorial found matching your keywords.</p> 
                : <p><br></br></p>
            }
        </section>
        <div className="chapterscontainer">
            <p htmlFor="lesson_search">Or browse through all the chapters:</p>

            <ul>
                {
                    chapterArr.map((chapter, index) => {
                        return <li key={index} >
                            <h3  onClick={() => {setSelectedChapter(index);console.log(index)}}>{chapter} - { (categories.get(chapter).length) + " tutorials"}</h3>
                            {  
                                selectedChapter==index && 
                                <TutorialData tutorials={tutorialActions.getTutorialsFromChapter(tutorials,categories.get(chapter))}></TutorialData>
                            }
                            </li>
                    })
                }
            </ul>
        </div>

 

        </>
    )
}

export default Tutorials