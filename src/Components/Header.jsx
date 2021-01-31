import React from 'react';
import Icon from '@mdi/react';
import { mdiWeatherFog , mdiCloudOutline , mdiSnowflake , mdiUmbrellaOutline } from '@mdi/js';
import ContextApi from '../Context';

class Header extends React.Component
{
    static contextType = ContextApi;

    render()
    {
        let Api = this.context;
        let {city} = Api.result;
        let {tag} = Api.iconSRC;
        return(
            <div className="header" style={{animation: "Load 1.5s ease-out"}}>
                <h1 className="country-name">
                    {city}
                </h1>

                <div className="icon-container">
                    {tag}
                </div>
            </div>
        );
    };
}

export default Header;