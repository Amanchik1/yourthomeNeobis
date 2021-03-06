import React from 'react';
import WrapperMap from "./googleMap";
import {connect} from "react-redux";
import {setPoint, setApartment, setAllPointsAC, getApartment, setSend} from '../../redux/googleMap_reducer'

const mapStateToProps = state => {
    return {
        points: state.points,
        filterData: state.filterData
    }
}

const WrapperMapContainer = connect(mapStateToProps,{
    setPoint, setSend,setApartment,setAllPointsAC,getApartment
})(WrapperMap)
export default WrapperMapContainer;