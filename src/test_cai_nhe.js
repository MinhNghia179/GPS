import React, { Component } from 'react';
import { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Image,
    Alert,
} from 'react-native';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            product :[]
        }
    }
    componentDidMount(){
        fetch('http://192.168.43.133:8080/server.json',{
            method : 'GET'
        }).then(response => response.json())
        .then((data) => {
            this.setState({product:data});
        }) 
    }
    deleteItem = (MaSP) => {
        fetch(`http://192.168.43.133:8080/server.json${MaSP}`,{
            method:"DELETE"
        }).then(reponse => reponse.json())
        .then((data)=>{
            let {product} = this.state;
            product = product.filter(x => x.MaSP != MaSP);
            this.setState({product})
        })
    }
    render(){
        return(
            <View>
                
            </View>
        )
    }
}