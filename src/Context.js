import React,{createContext} from 'react';

const ContextApi = createContext({
    result: {},
    iconSRC: {},
    backDrop: false
});

export default ContextApi;