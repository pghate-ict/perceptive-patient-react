import { createSelector } from 'reselect';
import { action } from 'mobx';


export const actionUnitsSelector = state => state.actionUnits;

export const latestActionUnitSelector = createSelector(
    [actionUnitsSelector],
    (actionUnits) => {
        let latestValues = [];
        latestValues = actionUnits[actionUnits.length - 1];
        let dataObject = [
            { name: "AU01"},
            { name: "AU02"},
            { name: "AU04"},
            { name: "AU05"},
            { name: "AU06"},
            { name: "AU07"},
            { name: "AU09"},
            { name: "AU10"},
            { name: "AU12"},
            { name: "AU14"},
            { name: "AU15"},
            { name: "AU17"},
            { name: "AU20"},
            { name: "AU23"},
            { name: "AU25"},
            { name: "AU26"},
            { name: "AU28"}
        ];

        for(var i=0; i<latestValues.length; i++){
            dataObject[i].value = latestValues[i];
        }
        return dataObject;
    }
)


