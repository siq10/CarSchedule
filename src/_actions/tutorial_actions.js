import { tutorialConstants } from '../_constants/tutorial_constants';
import { tutorialService } from '../_services/tutorials_service';
import { alertActions } from './alert_actions';

export const tutorialActions = {
    getAll,
    getCategories,
    getTutorialsFromChapter
    // delete: _delete
};

function getAll() {
    return dispatch => {
        dispatch(request());
        return new Promise((resolve, reject) => {
            tutorialService.getAll()
                .then(
                    tutorials => {
                        dispatch(success(tutorials));
                        return resolve(tutorials)
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                        return reject(error)
                    }
                );
        })
    };

    function request() { return { type: tutorialConstants.GETALL_REQUEST } }
    function success(tutorials) { return { type: tutorialConstants.GETALL_SUCCESS, tutorials } }
    function failure(error) { return { type: tutorialConstants.GETALL_ERROR, error } }
}

function getCategories(tutorials)
{
    const categories = new Map();
    for (var i = 0; i < tutorials.length; i++)
    {
        if(categories.has(tutorials[i].chapter) == false)
        {
            categories.set(tutorials[i].chapter,[i])
        }
        else
        {
            categories.get(tutorials[i].chapter).push(i)
        }
    }
    console.log(categories)
    return categories
}

function getTutorialsFromChapter(Tutorials,indexList)
{
    var result = []
    for (let i = 0; i < indexList.length; i++)
    {
        result.push(Tutorials[indexList[i]])
    }
    console.log(result)
    return result
}