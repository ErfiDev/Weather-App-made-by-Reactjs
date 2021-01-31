import React,{useState} from 'react';
import ContextApi from './Context';
import Icon from '@mdi/react';
import {mdiWeatherFog,mdiCloudOutline,mdiSnowflake,mdiUmbrellaOutline ,mdiWeatherPartlyCloudy ,mdiWeatherCloudyAlert} from '@mdi/js';

const Global = (props)=>{

    const [getResult , setResult] = useState({});
    const [getIcon , setIcon] = useState({});
    const [backDrop , setBackDrop] = useState(false);

    window.addEventListener("load" , ()=>{
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(position =>{
                console.log(position);
                let lati = position.coords.latitude;
                let long = position.coords.longitude;
                StartApi(lati , long);
            })
        }
    });

    const StartApi = (lati , longi)=>{
        fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lati}&lon=${longi}&appid=6cead677b4563809592af602e1e2344a&units=metric`)
        .then(response =>{
            statusTF(response.status);
            return response.json();
        }).then(json =>{
            let result = json.list[0];
            let {main , weather , name} = result;
            let {temp} = main;
            let description = weather[0];
            iconSRC(description.main);
            setResult({temp: temp , description: description.main , city: name});
        }).catch(erorr =>{
            console.log(erorr);
        })
    };

    const statusTF = (status)=>{
        if(status === 200)
        {
            setBackDrop(true);
        }
        else{
            setBackDrop(false);
        }
    };

    const iconSRC = (main)=>{
        const MainOption = ["Clouds" , "Mist" , "Snow" , "Rain" , "Clear"];
        if(main === "Clouds")
        {    
            setIcon({tag: <Icon path={mdiCloudOutline} size={4} color={"#51c2d5"} />});
        }
        if(main === "Mist")
        {
            setIcon({tag: <Icon path={mdiWeatherFog} size={4} color={"#51c2d5"} />});
        }
        if(main === "Snow")
        {
            setIcon({tag: <Icon path={mdiSnowflake} size={4} color={"#51c2d5"} />});
        }
        if(main === "Rain")
        {
            setIcon({tag: <Icon path={mdiUmbrellaOutline} size={4} color={"#51c2d5"} />});
        }
        if(main === "Clear")
        {
            setIcon({tag: <Icon path={mdiWeatherPartlyCloudy} size={4} color={"#51c2d5"} />});
        }
        if(MainOption.indexOf(main) <= -1)
        {
            setIcon({tag: <Icon path={mdiWeatherCloudyAlert} size={4} color={"#51c2d5"} />})
        }
    }
    
    return(
        <ContextApi.Provider value={{
            result: getResult,
            iconSRC: getIcon,
            backDrop: backDrop
        }}>
            {props.children}
        </ContextApi.Provider>
    );
};

export default Global;