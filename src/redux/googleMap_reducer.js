import api from "../api/api";

const setPoints = "SET_POINTS";
const setAllPoints = "SET_ALL_POINTS";
const chooseApartmentAC = "CHOOSE_APARTMENT";
const send = "SET_SEND_REQUEST"


let initialState = {
    points: [],
    allPoints: [],
    apartment: 0,
    send: false
}


export const googleMapReducer = (state = initialState, action) => {
    switch (action.type) {
        case setPoints:
            if (state.points.length === 0) {
                return {
                    ...state,
                    points: [...state.points, ...action.points],
                }

            } else {
                return {
                    ...state,
                    points: [...action.points],
                }
            }
        case setAllPoints:
            if (state.allPoints.length === 0) {
                return {
                    ...state,
                    allPoints: [...state.allPoints, ...action.points]
                }
            } else {
                return {
                    ...state,
                    allPoints: [...action.points]
                }
            }
        case chooseApartmentAC:
            return {
                ...state,
                apartment: [action.apartment]
            }
        case send :
            return {
                ...state,
                send: action.data
            }
        default:
            return {
                ...state
            }
    }
}


export const setPoint = (points) => {
    return {
        type: setPoints,
        points: points
    }
}
export const setAllPointsAC = (points) => {
    return {
        type: setAllPoints,
        points: points
    }
}
export const setApartment = apartment => {
    return {
        type: chooseApartmentAC,
        apartment
    }
}
export const setSend = (data) => {
    return {
        type: send,
        data
    }
}

export const getApartment = (data) => async (dispatch) => {
    let res = await api.getApartments({...data})
    dispatch(setPoint(res.data))
    dispatch(setSend(true))
    return true
}