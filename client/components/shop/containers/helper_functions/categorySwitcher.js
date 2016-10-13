import Supplies from '../../../../../lib/collections/supplies';
import EOCoverage from '../../../../../lib/collections/eocoverage';
import Bonds from '../../../../../lib/collections/bonds';

import _ from 'lodash';

/*----------------------------------------------------------------------------*/
//Helper functions for switch case 'componentWillMount' -- selecting database

function selectingDatabaseSwitch(databaseToLoad) {
    switch (databaseToLoad) {
        case 'supplies':
        return databaseToLoad = Supplies;
            break;
        case 'eo':
         return databaseToLoad = EOCoverage;
            break;
        case 'bonds':
        return databaseToLoad = Bonds;
            break;
        default:
            databaseToLoad = null;
            break;
    }
}

function selectDatabaseToLoad(categoryToBeFiltered, databaseToLoad) {
    if (_.isArray(categoryToBeFiltered)) {
        //grab the value of the category from the url, whether it is an array or object
        databaseToLoad = categoryToBeFiltered[0];
        //sort it convert it into the correct database to be loaded
        return value = selectingDatabaseSwitch(databaseToLoad)

    } else {
        //grab the value of the category from the url, whether it is an array or object
        databaseToLoad = categoryToBeFiltered.id;
        //sort it convert it into the correct database to be loaded
       return value = selectingDatabaseSwitch(databaseToLoad)
    }
}

/*----------------------------------------------------------------------------*/
//Helper function for case 'render' -- selecting URI to load into <Link> component

function selectUriValueToLoad(routerCategory) {
    if (_.isArray(routerCategory.id)) {
      return valueToReturn = routerCategory.id[0];
    } else {
       return valueToReturn = routerCategory.id;
    }
}

/*----------------------------------------------------------------------------*/
//Helper function for shopListContainer.js below

export default function categorySwitch(categoryToFilter, nameOfCallingFunction) {
    var functionCallingSwitch = nameOfCallingFunction;
    var valueToLoad = null;
    //This determines which function is calling it.
    switch (functionCallingSwitch) {
        case 'componentWillMount':
        return actualValueToLoad = selectDatabaseToLoad(categoryToFilter, valueToLoad);
            break;
        case 'render':
       return actualValueToLoad = selectUriValueToLoad(categoryToFilter);
            break;
        case 'mapStateToProps':
        return actualValueToLoad = selectUriValueToLoad(categoryToFilter);
            break;
        case 'mapStateSubscriptionToProps':
        return actualValueToLoad = selectUriValueToLoad(categoryToFilter);
            break;
        default:

    }
}