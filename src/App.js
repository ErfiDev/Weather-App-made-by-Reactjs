import React,{Fragment , useContext} from 'react';
import Layout from './Layouts/Layoute';
import "@mdi/font/css/materialdesignicons.css";
import Backdrop from './Components/backDrop';
import ContextApi from './Context';

import './CSS/Compiled/style.css';

const App = ()=>{

    const Context = useContext(ContextApi);
    let backDrop = Context.backDrop;

    return (
        <Fragment> 
            {(backDrop) ? <Layout /> : <Backdrop />}
        </Fragment>
    );
};

export default App;