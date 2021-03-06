import {setDataRefresh} from "./authReducer";
import api from "../api/api";

const INITIALIZE_SUCCEED = "app/INITIALIZE_SUCCEED";
const INITIALIZE_REGIONS = "app/INITIALIZE_REGIONS";
const INITIALIZE_TYPES = "app/INITIALIZE_TYPES";
const INITIALIZE_SERIES = "app/INITIALIZE_SERIES";
const INITIALIZE_STATE = "app/INITIALIZE_STATE";
const INITIALIZE_CTYPES = "app/INITIALIZE_CTYPES";
const INITIALIZE_CURRENCY = "app/INITIALIZE_CURRENCY"
const INITIALIZE_COUNTRY = "app/INITIALIZE_COUNTRY"
const INITIALIZE_NEARBYOBJECTS = "app/INITIALIZE_NEARBYOBJECTS"
const INITIALIZE_OBJECTS_IN_APARTMENT = "app/INITIALIZE_OBJECTS_IN_APARTMENT"
let initialState = {
    initialise: false,
    regions: [],
    types: [],
    constructionType: [],
    series: [],
    state: [],
    country: [],
    currency: null,
    nearby_objects: null,
    objects_in_apartment: null,
}


export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZE_SUCCEED:
            return {
                ...state,
                initialise: true
            }
        case INITIALIZE_REGIONS:
            return {
                ...state,
                regions: [...action.data]
            }
        case INITIALIZE_TYPES:
            return {
                ...state,
                types: [...action.data]
            }
        case INITIALIZE_CTYPES:
            return {
                ...state,
                constructionType: [...action.data]
            }
        case INITIALIZE_SERIES:
            return {
                ...state,
                series: [...action.data]
            }
        case INITIALIZE_STATE:
            return {
                ...state,
                state: [...action.data]
            }
        case INITIALIZE_CURRENCY:
            return {
                ...state,
                currency: [...action.data]
            }
        case INITIALIZE_COUNTRY:
            return {
                ...state,
                country: [...action.data]
            }
        case INITIALIZE_OBJECTS_IN_APARTMENT:
            return{
                ...state,
                objects_in_apartment: [...action.data]
            }
        case INITIALIZE_NEARBYOBJECTS:
            return{
                ...state,
                nearby_objects: [...action.data]
            }
        default:
            return {
                ...state
            }
    }
}


export const initializeSuccess = () => {
    return {
        type: INITIALIZE_SUCCEED
    }
}
export const initializeRegions = (data) => {
    return {
        type: INITIALIZE_REGIONS,
        data
    }
}

export const initializeTypes = (data) => {
    return {
        type: INITIALIZE_TYPES,
        data
    }
}
export const initializeSeries = (data) => {
    return {
        type: INITIALIZE_SERIES,
        data
    }
}
export const initializeState = (data) => {
    return {
        type: INITIALIZE_STATE,
        data
    }
}
export const initializeCTypes = (data) => {
    return {
        type: INITIALIZE_CTYPES,
        data
    }
}
export const initializeCurrency = (data) => {
    return {
        type: INITIALIZE_CURRENCY,
        data
    }
}
export const initializeCountry = (data) => {
    return {
        type: INITIALIZE_COUNTRY,
        data
    }
}
export const initializeNearbyObjects = (data) => {
    return {
        type: INITIALIZE_NEARBYOBJECTS,
        data
    }
}
export const initializeObjectsInApartment = (data) => {
    return {
        type: INITIALIZE_OBJECTS_IN_APARTMENT,
        data
    }
}
export const initializeAppData = () => (dispatch) => {
    api.getTypes().then(res => dispatch(initializeTypes(res.data)))
    api.getSeries().then(res => dispatch(initializeSeries(res.data)))
    api.getState().then(res => dispatch(initializeState(res.data)))
    api.getCurrency().then(res => dispatch(initializeCurrency(res.data)))
    api.getRegions().then(res => dispatch(initializeRegions(res.data)))
    api.getConstructionType().then(res => dispatch(initializeCTypes(res.data)))
    api.getCountry().then(res => dispatch(initializeCountry(res.data)))
    api.getNearby_object().then(res => dispatch(initializeNearbyObjects(res.data)))
    api.getObjects_in_apartment().then(res => dispatch(initializeObjectsInApartment(res.data)))
}

export const initializeApp = () => (dispatch) => {
    let data = JSON.parse(localStorage.getItem('userData'));
    if (!data) {
        dispatch(initializeSuccess())
    } else {
        let promise = dispatch(setDataRefresh())
        Promise.all([promise]).then(() => {
            dispatch(initializeSuccess())
        })
    }
}
