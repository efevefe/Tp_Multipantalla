import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {CardSection,Input} from '../common'
import {Button} from 'react-native-elements'
import {connect} from 'react-redux' 
import {employedUpdate,employedCreate} from '../actions'

class EmployedCreate extends React.Component{
   
    state= {error:''};
    
    onButonPress(){
        const {name ,surname,legajo} = this.props
        if(this.props.legajo ==='' || this.props.name ==='' ||this.props.surname ===''){
            this.setState({error:"Todos los campos son OBLIGATORIOS"})
        }
        else{
        this.props.employedCreate({name ,surname,legajo})
        }
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:"flex-start" , backgroundColor :'#ffe9e1' }}> 
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
                    <Text style={styles.styleError}>{this.state.error}</Text>
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
const styles = StyleSheet.create({
    styleError: {
      fontSize:15,
      alignSelf:'center',
      color:'red',
      borderRadius: 10,
    },
  });
export default connect(mapStateToProps,{employedUpdate,employedCreate})(EmployedCreate)