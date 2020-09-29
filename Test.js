import React, { Component } from 'react'
import {Text,View} from 'react-native'
import {connect} from 'react-redux'
import { fetchData } from './Reducer/Action/action'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

class Test extends Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        this.props.fetchData()
        console.log("Function data is",this.props.data2)
    }
    renderItem(item){
        const data=item
        console.log("Render data is",data.item)
        return(
           <ScrollView> 
            <View style={{height:90,width:350,borderWidth:1,marginLeft:30,marginTop:50,backgroundColor:'#0000cd'}}>
           
                <Text style={{fontSize:16,fontWeight:'bold',paddingLeft:50,paddingTop:5,color:'#ffff00'}}><Text style={{fontSize:18,color:'white'}}>ID :
                </Text>
                {data.item.id}</Text>
           
                <Text style={{fontSize:16,fontWeight:'bold',paddingLeft:50,color:'#ffff00'}}><Text style={{fontSize:18,color:'white'}}>Name :
                </Text>
                {data.item.name}</Text>
           
                <Text style={{fontSize:16,fontWeight:'bold',paddingLeft:50,color:'#ffff00'}}><Text style={{fontSize:18,color:'white'}}>Email :
                </Text>
                {data.item.email}</Text>
            </View>
        </ScrollView>
        )
       
    }
    render(){
        console.log("New data is",this.props.data2)
       // console.log("Function data is",this.props.fetchData())
        return(
            <View>
                <FlatList
                data={this.props.data2}
                renderItem={(item)=>this.renderItem(item)}
                keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }
}

const mapStateToProps = state =>{
    console.log("Data value is",state.data)
    return{
            
        data2:state.data
       
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchData:() => dispatch(fetchData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Test)