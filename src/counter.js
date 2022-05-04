import React, { useEffect } from "react"
import {View, Text , Button, style, StyleSheet,} from "react-native"
import {reducer} from "redux-form";
import {connect} from 'react-redux';
import {
  ADD_INC,
  ADD_DEC,
} from '../src/actions';


const counter= props => {
    global.DEV = true;
    var {
      counter
    } = props.appreducer;

    useEffect(()=>{
      console.log(
        counter
      );


    },[counter])
    return(
        <View style = { styles.container }>
        <Text>Count={counter}</Text>
        <Text style={styles.space}></Text>
        <Button style={styles.button} title='increment' onPress={()=> {props.ADD_INC(counter+1)}}/>
        <Text style={styles.space}></Text>
        <Button style={styles.button} title='decrement' onPress={()=> {props.ADD_DEC(counter-1)}}/>
        </View>
    );
};

const mapStateToProps = ({appreducer}) => ({
  appreducer,
});



export default connect(mapStateToProps, {
    ADD_INC,
    ADD_DEC,
  })(counter);


const styles = StyleSheet.create({

    container: {
      paddingTop: 30,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#a8cc30',
    },
    button: {
      marginBottom: 20,
      padding: 30
    },
    space: {
      width: 30, // or whatever size you need
      height: 30,
    },
  
  
  
  
  });