import React from 'react';
import ContextApi from '../Context';

class Footer extends React.Component
{
    static contextType = ContextApi;

    render()
    {
        let Api = this.context;
        let {temp , description} = Api.result;
        return(
            <div className="footer" style={{animation: "Load 1.5s ease-out"}}>
                <p className="weather">    
                    {temp}
                    <span>
                        °C
                    </span>
                </p>
                <h2>
                    {description}
                </h2>
            </div>
        );
    }
}

export default Footer;