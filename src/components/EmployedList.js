import _ from 'lodash'
import React from 'react'
import {View,Text,FlatList} from 'react-native'
import {CardSection,Input, Spinner} from '../common'
import {connect} from 'react-redux' 
import {employedFetch} from '../actions'
import EmployedListItem from './EmployedListItem'
class EmployedList extends React.Component{

    componentWillMount(){
        this.props.employedFetch()
    }
    renderRow({ item }) {
        return <EmployedListItem employed={item} />;
    }
    renderList() {
            return (
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.props.employed}
                        renderItem={this.renderRow.bind(this)}
                        keyExtractor={employed => employed.uid}
                    />
                </View>
            );
        
    }

    render(){
        return(
            this.renderList()
        )
    }
}

 const mapStateToProps =(state) =>{
     const employed = _.map(state.employed, (val,uid) =>{
         return{...val,uid}
     });
     console.log(employed)
     return {employed}
}
export default connect(mapStateToProps,{employedFetch})(EmployedList)