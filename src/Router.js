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
               <Scene key="login" component={LoginForm} title="Tp Multipantalla"  navigationBarStyle={{ backgroundColor: '#ffa07a'}} titleStyle={{alignItems:'center',fontStyle:'italic',fontSize:25}}/>
           </Scene>  
           <Scene key= "employed"> 
               <Scene 
               rightTitle ="Add"
               onRight={()=>Actions.employedItem()}
               key="employedList" 
               component={EmployedList} 
               title="Empleados" navigationBarStyle={{ backgroundColor: '#ffa07a'}} titleStyle={{alignItems:'center',fontStyle:'italic',fontSize:25}}/>
            <Scene key="employedItem" component={EmployedCreate} title="Datos del Empleado" navigationBarStyle={{ backgroundColor: '#ffa07a'}} titleStyle={{alignItems:'center',fontStyle:'italic',fontSize:25}}/>

           </Scene>
           </Scene>
        </Router>
    );
};

export default RouterComponent