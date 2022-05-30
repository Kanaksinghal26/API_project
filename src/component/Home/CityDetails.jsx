import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useLocation} from 'react-router'

const CityDetail = () => {

    const [cityName, setCityName] =useState()
    const [cityData, setCityData] = useState()

    const location = useLocation()

    useEffect(() => {

        if (location.state) {
            setCityName(location.state.cityName)
        }
        fetchCityData()
    }, [cityName])

    const fetchCityData = () => {
        cityName && 
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=417c63bb80edeace4f28ea3b2d889640')
        .then(res => {
            setCityData(res)
            console.log("City found not")
        })

        .catch(err => {
            console.log("Error", err)
        })
    }

    return (
        <div>
            City Name: {cityName}
        </div>
    )
}

export default CityDetail  


