import React from 'react'
import { FaThermometerEmpty } from "react-icons/fa"
import { BiSolidDropletHalf } from "react-icons/bi"
import { FiWind } from "react-icons/fi"
import { GiSunrise, GiSunset } from "react-icons/gi"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"

const Details = ({ weather: { 
    details,
    icon, 
    temp, 
    temp_min, 
    temp_max, 
    sunrise, 
    sunset, 
    speed, 
    humidity, 
    feels_like, 
    },
    units 
    }) => {
    const verticalDetails = [
        {
            id:1,
            Icon: FaThermometerEmpty,
            title: "Real Feel",
            value: `${feels_like.toFixed()}°${units === "metric" ? "C" : "F"}`
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity.toFixed()}%`
        },
        {
            id:3,
            Icon: FiWind,
            title: "Wind",
            value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/h"}`
        },
    ]
    const horizontalDetails = [
        {
            id:1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise
        },
        {
            id:2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset
        },
        {
            id:3,
            Icon: MdKeyboardArrowUp,
            title: "Highest",
            value: `${temp_max.toFixed()}°${units === "metric" ? "C" : "F"}`
        },
        {
            id:4,
            Icon: MdKeyboardArrowDown,
            title: "Lowest",
            value: `${temp_min.toFixed()}°${units === "metric" ? "C" : "F"}`
        },
    ]
  return (
    <div>

        <div className="flex flex-row items-center justify-center py-6 text-xl">
            <p>{details}</p>
        </div>

        <div className="flex flex-row items-center justify-between py-3">
            <img 
                src={icon}
                alt="weatherIcon"
                className="w-40"
            />
            <p className="text-5xl">{`${temp.toFixed()}°${units === "metric" ? "C" : "F"}`}</p>
            <div className="flex flex-col space-y-3 items-start">
                    {
                        verticalDetails.map(({id, Icon, title, value})=> (
                            <div key={id} className="flex font-light text-sm items-center justify-center">
                                <Icon size={18} className="mr-1"/>
                                {`${title}:`} <span className="font-medium ml-1">{value}</span>
                            </div>
                        ))
                    }
            </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
            {
                horizontalDetails.map(({id, Icon, title, value}) => (
                    <div key={id} className="flex flex-row items-center">
                        <Icon size={30} />
                        <p className="font-light">{`${title}:`}</p><span className="font-medium ml-1">{value}</span>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Details