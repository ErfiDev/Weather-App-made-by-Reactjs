import React,{Fragment} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Layout extends React.Component
{
    render()
    {
        return(
            <Fragment>
                <Header />
                    <hr className="hr" />
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;