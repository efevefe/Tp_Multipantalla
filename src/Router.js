import React from 'react';
import {Scene,Router, Actions} from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployedList from './components/EmployedList'
import EmployedCreate from './components/EmployedCreate'


const RouterComponent= () => {
    return(
        <Router>
            <Scene key= "root" hideNavBar>
            <Scene key= "auth"> 
               <Scene key="login" component={LoginForm} title="TP MULTIPANTALLA"/>
           </Scene> 
           <Scene key= "employed"> 
               <Scene 
               rightTitle ="Add"
               onRight={()=>Actions.employedItem()}
               key="employedList" 
               component={EmployedList} 
               title="Empleados"/>
            <Scene key="employedItem" component={EmployedCreate} title="Datos del Empleado"/>

           </Scene>
           </Scene>
        </Router>
    );
};

export default RouterComponent