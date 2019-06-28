import React from 'react'
import {View} from 'react-native'
import {CardSection,Input} from '../common'
import {Button} from 'react-native-elements'
import {connect} from 'react-redux' 
import {employedUpdate,employedCreate} from '../actions'

class EmployedCreate extends React.Component{

    onButonPress(){
        const {name ,surname,phone} = this.props
        this.props.employedCreate({name ,surname,phone})
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:"flex-start"}}> 
                <CardSection style={{flex:0.5, justifyContent:"flex-start"}}>
                    <Input 
                    label="Nombre"
                    placeholder="Juan"
                    value={this.props.name}
                    onChangeText={text => this.props.employedUpdate({prop:'name',value:text})}/>
                </CardSection>
                <CardSection  style={{flex:0.5, justifyContent:"flex-start"}}>
                    <Input 
                    label="Apellido"
                    placeholder="Perez"
                    value={this.props.surname}
                    onChangeText={text => this.props.employedUpdate({prop:'surname',value:text})}/>
                </CardSection>
                <CardSection  style={{flex:0.5, justifyContent:"flex-start"}}>
                    <Input 
                    label="Telefono"
                    placeholder="351000000"
                    value={this.props.phone}
                    onChangeText={text => this.props.employedUpdate({prop:'phone',value: text})}/>
                </CardSection>     
                <CardSection  style={{flex:2, justifyContent:"flex-start"}}>
                    <Button title= "Crear Empleado" type = "solid" onPress={this.onButonPress.bind(this)}/>
                </CardSection>       
            </View>
        )
    }
}
const mapStateToProps =(state) =>{
    const {name,surname,phone} = state.employedForm
    return{name,surname,phone}
}
export default connect(mapStateToProps,{employedUpdate,employedCreate})(EmployedCreate)