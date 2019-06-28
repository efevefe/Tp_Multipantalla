import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {CardSection,Input, Spinner} from '../common'
import {Button} from 'react-native-elements'
import {connect} from 'react-redux' 
import {emailChange ,passwordChange,loginUser} from '../actions'

class LoginForm extends React.Component{
   
    onEmailChange (text){
        this.props.emailChange(text)
    }
    onPasswordChange(text){
        this.props.passwordChange(text)
    }
    onButtonHanddler(){
        const {email,password}= this.props
        this.props.loginUser({email,password})
    }
    onErrorRender(){
        if(this.props.error){
            return(
                <View >
                    <Text style={styles.styleError}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }
    onButtonRender(){
        if(this.props.loading)
        {return(<Spinner size="large"/>)}
        else{
            return(
            <Button title= "Login"
                    onPress={this.onButtonHanddler.bind(this)}
            />)
        }

    }
    render(){
        return(
            <View style={{flex:1 , alignItems:"stretch" }}>
                    <CardSection style={{flex:1 }}>
                        <Input label = "Email"
                        placeholder= "email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}/>
                    </CardSection>                  
                    <CardSection style={{flex:1 }}>
                    <Input label = "Password"
                        secureTextEntry
                        placeholder= "password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}/>
                    </CardSection>
                    {this.onErrorRender()}
                    <CardSection style={{flex:3.5}}>
                        {this.onButtonRender()}
                    </CardSection>
            </View>
        );
    }
}
const mapStateToProps = state => {
    const { email,password,error,loading} = state.auth;
  
    return { email,password,error,loading};
  };


 const styles = StyleSheet.create({
    styleError: {
      fontSize:20,
      alignSelf:'center',
      color:'red'
    },
  });
export default connect(mapStateToProps,{emailChange,passwordChange,loginUser})(LoginForm)