import React from 'react'
import {View} from 'react-native'
import {CardSection,Input} from '../common'
import {Button} from 'react-native-elements'
import {connect} from 'react-redux' 
import {employedUpdate,employedCreate} from '../actions'

class EmployedCreate extends React.Component{
    state={error:''}
    onButonPress(){
        const {name ,surname,legajo} = this.props
        console.log(this.state.error)
        this.renderError()
        if(this.state.error){
            console.log(this.state.error)
            return(<View>
                <Text>{this.state.error}</Text>
            </View>)
        }
        else{
        this.props.employedCreate({name ,surname,legajo})
        }
    }
    renderError(){
        if(this.props.legajo ==='' || this.props.name ==='' ||this.props.surname ===''){
            this.setState({error:'Todos los campos son OBLIGATORIOS'})
            return false
        }
        return true
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
                    keyboardType = 'numeric'
                    label="Legajo"
                    placeholder="3333"
                    value={this.props.legajo}
                    maxLength={10}
                    onChangeText={text => this.props.employedUpdate({prop:'legajo',value: text})}/>
                </CardSection>     
                <CardSection  style={{flex:2, justifyContent:"flex-start"}}>
                    <Button title= "Crear Empleado" type = "solid" onPress={this.onButonPress.bind(this)}/>
                </CardSection>       
            </View>
        )
    }
}
const mapStateToProps =(state) =>{
    const {name,surname,legajo} = state.employedForm
    return{name,surname,legajo}
}
export default connect(mapStateToProps,{employedUpdate,employedCreate})(EmployedCreate)