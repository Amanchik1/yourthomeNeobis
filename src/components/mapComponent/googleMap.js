import React, {useEffect, useState} from 'react';
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import css from './map.module.css'
import FilterForMap from "../filterForMap/filterForMap";
import {Link} from "react-router-dom";
import Element from "../element/element";
import marker from '../../img/marker6.png'
import marker2 from '../../img/marker10.png'
import {Carousel} from "react-responsive-carousel";
import {bounce, fadeInRight, fadeOutRight} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Preloader from "../preloader/Preloader";
import left from '../../img/left.png'

const {MarkerClusterer} = require("react-google-maps/lib/components/addons/MarkerClusterer");


const MyMapComponent = withScriptjs(withGoogleMap((props) => {
        let map = React.createRef()
        let arr = [];
        let newarr = [];
        const [zoom, setZoom] = useState(6.5)
        const [center, setCenter] = useState(props.latLng)
        const [selectedPark, setSelectedPark] = useState(null);

        const a = [
            {id: 1, name: "Aman"},
            {id: 1, name: "Aman"},
            {id: 3, name: "Turar"},
            {id: 2, name: "Esen"},
            {id: 1, name: "Aman"},
        ]
        const filteredArray = props.points.map((item, index) => {
            let len = props.points.length;
            if(index < len - 1) {
                let c = props.points[1+index];
                if (item.id !== c.id) {
                    return item
                }
            }else{
                return item
            }
            return null
        })
        const newArray = filteredArray.filter(item => item !== null)
        const onMarkerMounted = (element) => {
            arr.push(element)
        }

        useEffect(()=>{
            setZoom(zoom + 0.1)
        }, [props.points])
        useEffect(() => {
            setZoom(props.zoom)
        }, [props.zoom])
        let windowWidth = window.innerWidth;
        return (
            <div className={css.mainWrapper}>
                <GoogleMap
                    onTilesLoaded={() => {
                        setTimeout(() => {
                            setZoom(props.zoom)
                        }, 500)
                    }}
                    ref={map}
                    zoom={zoom}
                    center={props.latLng}
                    onBoundsChanged={() => {
                        newarr = [];
                        arr.forEach((item => {
                            if (map.current.getBounds() !== null) {
                                if (map.current.getBounds().contains(item.props.position)) {
                                    newarr.push(item.props.id)
                                } else {
                                    console.log("failed")
                                }
                            }
                        }))
                        props.setVisibleMarkers(newarr)
                    }}
                >
                    <MarkerClusterer
                        // onClick={props.onMarkerClustererClick}
                        averageCenter
                        enableRetinaIcons
                        gridSize={60}
                    >
                        {newArray.map((item) =>{
                                return <Marker
                                    ref={onMarkerMounted}
                                    onClick={() => {
                                        setSelectedPark(item)
                                    }}
                                    position={{
                                        lat: +item.location.latitude,
                                        lng: +item.location.longitude
                                    }}
                                    title={item.description}
                                    color={'#ffffff'}
                                    markerWithLabel={"Hello"}
                                    label={{
                                        text: Math.floor(item.currency === '$' ? item.price : item.another_price) + '$',
                                        color: '#000',
                                        fontSize: 16 + 'px',
                                        textAlign: center,
                                    }}
                                    icon={
                                        // iconMarker
                                        {
                                            url: String(Math.floor(item.currency === '$' ? item.price : item.another_price)).length > 3 ? marker : String(Math.floor(item.currency === '$' ? item.price : item.another_price)).length >= 2 ? marker2 : marker,
                                            scaledSize: {
                                                width: String(Math.floor(item.currency === '$' ? item.price : item.another_price)).length > 3 ? 60 : String(Math.floor(item.currency === '$' ? item.price : item.another_price)).length >= 5 ? 70 : 40,
                                                height: 35
                                            },
                                            labelOrigin: new window.google.maps.Point(String(Math.floor(item.currency === '$' ? item.price : item.another_price)).length > 3 ? 30 : String(Math.floor(item.currency === '$' ? item.price : item.another_price)).length >= 5 ? 25 : 20, 12),
                                        }
                                    }
                                    key={item.id}
                                    id={item.id}
                                    cursor={"pointer"}
                                />
                        })}
                    </MarkerClusterer>
                    {selectedPark && (
                        <InfoWindow
                            position={{
                                lat: +selectedPark.location.latitude,
                                lng: +selectedPark.location.longitude,
                            }}
                            onCloseClick={() => setSelectedPark(null)}
                        >
                            <div className={css.btnWrapper}>
                                <Carousel
                                    width={windowWidth > 768 ? `250px` : `190px`}
                                    autoPlay={true}
                                    swipeable={true}
                                    infiniteLoop={true}
                                    showThumbs={false}
                                >
                                    {selectedPark.apartment_image.map(item => <div>
                                        <img src={item.image} alt=" "/>
                                    </div>)}
                                    {/*<div>*/}
                                        {/*<img*/}
                                            {/*src="https://img.freepik.com/free-vector/vector-illustration-cartoon-interior-orange-home-room-living-room-with-two-soft-armchairs_1441-399.jpg?size=626&ext=jpg"/>*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                        {/*<img*/}
                                            {/*src="https://media.gettyimages.com/photos/laptop-on-coffee-table-in-a-modern-living-room-of-an-old-country-picture-id900217718?s=612x612"/>*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                        {/*<img*/}
                                            {/*src="https://yourthomeneobis2.herokuapp.com/media/photos/1a4da06bcdf207407ef4767711eeb20e.jpg"/>*/}
                                    {/*</div>*/}
                                </Carousel>
                                <div>
                                    <Link
                                        to={`/more-info/${selectedPark.id}`}>
                                        Подробнее
                                    </Link>
                                </div>
                            </div>
                        </InfoWindow>
                    )}

                </GoogleMap>
            </div>
        )
    }
))


const WrapperMap = props => {
    const {
        region, city, dateFrom, dateTo, rooms, floor,
        priceFrom, priceTo, apartmentType,
        construction_type, state, nearby_objects, atHome
    } = props.filterData;

    const [filteredCity, setFilteredCity] = useState('')
    const [selected, setSelected] = useState([])
    const [apartments, setApartments] = useState(props.points.points);
    const [filterStyle, setFilterStyle] = useState(false);
    const [openMap, setOpenMap] = useState(true);
    const [latLng, setLatLng] = useState({})
    const [zoome, setZoome] = useState(6)
    const [pending, setPending] = useState(true)
    let arr = [];
    useEffect(() => {
        setApartments(props.points.points)
    });
    useEffect(() => {
        if (filteredCity === '') {
            setLatLng({lat: 41.204380, lng: 74.766098})
            setZoome(7)
        } else {
            setZoome(zoome === 9 ? 9.01 : 9);
            return filteredCity === '1' ? setLatLng({lat: 42.771211, lng: 74.545287}) :
                filteredCity === '2' ? setLatLng({lat: 40.532589, lng: 72.771791}) :
                    filteredCity === '3' ? setLatLng({lat: 41.426350, lng: 75.991058}) :
                        filteredCity === '4' ? setLatLng({lat: 42.521700, lng: 72.244290}) :
                            filteredCity === '5' ? setLatLng({lat: 42.261049, lng: 77.808740}) :
                                filteredCity === '6' ? setLatLng({lat: 41.434490, lng: 72.602859}) :
                                    filteredCity === '7' ? setLatLng({
                                        lat: 39.884450,
                                        lng: 71.294314
                                    }) : console.log(filteredCity)
        }
    }, [filteredCity])
    useEffect(() => {
        props.getApartment({...props.filterData}).then(res => {
            setPending(false)
        })
    }, [
        city, region, dateFrom, dateTo, rooms, floor,
        priceFrom, priceTo, apartmentType,
        state, construction_type, nearby_objects, atHome
    ]);
    useEffect(() => {
        props.getApartment(
            {...props.filterData}
        ).then(res => {
            setPending(false)
        })
        return () => props.setSend(false)
    }, []);
    selected.map(id => arr.push(...props.points.points.filter(item => item.id === id)));
    let chooseApartment = item => {
        props.setApartment(item)
    };
    let items;
    if (arr.length > 0) {
        const filteredArray = arr.map((item, index) => {
            let len = arr.length;
            if(index < len - 1) {
                let c = arr[1+index];
                if (item.id !== c.id) {
                    return item
                }
            }else{
                return item
            }
            return null
        })
        const newArray = filteredArray.filter(item => item !== null)
        items = newArray.map(item => {
            return (
                <div key={item.id}>
                    <Element
                        id={item.id}
                        chooseAp={chooseApartment}
                        img={item.apartment_image[0] ? item.apartment_image[0].image : null}
                        forSale={item.title}
                        house_number={item.location.house_number}
                        street={item.location.street}
                        city={item.location.city}
                        area={item.area.total_area}
                        room={item.room}
                        floor={item.floor}
                        price={item.currency === '$' ? item.price : item.another_price}
                        priceSom={item.currency === '$' ? item.another_price : item.price}
                        addetDate={item.date_of_arrival}
                    />
                </div>
            )
        })
    }
    const styles = {
        bounce: {
            animation: 'y 1s',
            animationName: Radium.keyframes(bounce, 'bounce')
        },
        fadeInLeft: {
            animation: '0.5s',
            animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
        },
        fadeOutRight: {
            animation: '0.5s',
            animationName: Radium.keyframes(fadeOutRight, 'fadeOutRight')
        }
    }
    if (!props.points.send) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={css.wrapper}>
                <div className={`${css.map} ${openMap === null ? css.hide : openMap ? '' : css.hide}`}>
                    <MyMapComponent
                        chooseApartment={props.setApartment}
                        latLng={latLng}
                        zoom={zoome}
                        setZoome={setZoome}
                        setVisibleMarkers={setSelected}
                        sended={props.points.send}
                        googleMapURL="
                        https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC31ZdDwrrTeMu4oaL5m5q4m6gCqAGkIKM
                        "
                        loadingElement={<div
                            style={{height: `100%`, position: `sticky`, zIndex: `99999990`, top: `0`, left: `0`}}/>}
                        containerElement={<div
                            style={{height: `90vh`, position: `sticky`, zIndex: `99999990`, top: `9vh`, left: `0`,}}/>}
                        mapElement={<div
                            style={{height: `100%`, position: `sticky`, zIndex: `99999990`, top: `0`, left: `0`}}/>}
                        points={apartments}
                    />
                </div>
                <StyleRoot>
                    <div className={`${css.elemetsWrapper} ${openMap ? css.hide : ''}`}>
                        <div onClick={() => !filterStyle ? setFilterStyle(true) : setFilterStyle(false)}
                             className={css.filterBtnWrapper}>
                            <div style={{width: !filterStyle ? '30px' : '35px'}}>
                                <img style={{
                                    transition: 'transform 0.4s ease',
                                    transform: !filterStyle ? '' : 'rotate(180deg)'
                                }}
                                     src={left} alt="left"/>
                            </div>
                        </div>
                        <div style={styles.fadeInLeft}>
                            <div style={
                                filterStyle === false ? styles.fadeOutRight && {display: 'none'} : styles.fadeInLeft
                            }>
                                <FilterForMap
                                    setItem={setFilteredCity}
                                    setFilterStyle={setFilterStyle}
                                    openMap={openMap}
                                    setOpenMap={setOpenMap}
                                    setSend={props.setSend}
                                    setPending={setPending}
                                    setZoom={setZoome}
                                />
                            </div>
                            {
                                pending
                                    ? <Preloader/>
                                    : <div style={
                                        filterStyle === false ? styles.fadeInLeft : styles.fadeOutRight && {display: 'none'}}>
                                        {items ? items : <div className={css.noData}>НЕТ ОБЪЯВЛЕНИЙ</div>}
                                    </div>
                            }
                        </div>
                    </div>
                </StyleRoot>
                <div className={css.mobileBtns}>
                    <div>
                        <button onClick={() => {
                            setFilterStyle(false)
                            setOpenMap(!openMap)
                        }}> {
                            openMap ? 'Список' : 'Карта'
                        }</button>
                    </div>
                    <div>
                        <button onClick={() => {
                            setFilterStyle(true)
                            setOpenMap(openMap ? false : '')
                        }}>Фильтер
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WrapperMap;