import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import React, { Component } from "react";
import thunk from 'redux-thunk';
import  Test  from "./Test";
import  dataState  from "./Reducer/reducer1";

const store=createStore( dataState , applyMiddleware(thunk));

 class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Test/>
            </Provider>
        )
    }
}
export default App