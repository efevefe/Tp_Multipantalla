import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';
import { CardSection } from '../common';

class EmployedListItem extends Component{
    
    render(){
        return(
            <View >
                <CardSection>
                <Text style={styles.textStyle}>Nombre: {this.props.employed.name}</Text>
                </CardSection>
                <CardSection>
                <Text style={styles.textStyle}>Apellido: {this.props.employed.surname}</Text>
                </CardSection>
                <CardSection >
                <Text style={styles.textStyle}>Legajo: {this.props.employed.legajo}</Text>
                </CardSection>
                <Divider style={{ backgroundColor: 'grey', marginLeft: 10, marginRight: 10 }} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
textStyle:{ 
    fontWeight: 'bold',  
    fontSize: 16, 
         }
})

export default EmployedListItem