import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Item from './components/Item'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields:[
        ['1','4','7','.'],
        ['2','5','8','0'],
        ['3','6','9','='],
        ['C','/','*','-','+']
      ],
      operation: '',
      result: '',
    }
  }

  onPress = (name) =>{
    let op = this.state.operation
    if(name == '='){
      this.math()
    }
    else if(name == 'C'){
      op = op.slice(0, -1)
      this.setState({
        operation: op,
        //result: ''
      })
    }
    else{
      this.setState({
        operation: op + name
      })
    }
  }

  math = () =>{
    let result 
        try{
            console.log(this.state.operation)
            result = eval(this.state.operation) 
        }catch{
            result = "error"
        }
        this.setState({
          result: result
        })
  }

  render() {
    let fieldList = this.state.fields.map((tab, i)=>{
      let list = tab.map((name, i)=>{
          return <Item type={name} key={i} onPress={this.onPress}></Item>
      })
      return list
    })
    return (
      <View style={styles.container}>
        <View style={styles.operationView}>
          <Text style={styles.operationText}>{this.state.operation}</Text>
        </View>
        <View style={styles.resultView}>
            <Text style={styles.resultText}>{this.state.result}</Text>
        </View>
        <View style={styles.buttonsView}>
          <View style={styles.column}>
            {fieldList[0]}
          </View>
          <View style={styles.column}>
            {fieldList[1]}
          </View>
          <View style={styles.column}>
            {fieldList[2]}
          </View>
          <View style={styles.columnLast}>
            {fieldList[3]}
          </View>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },

  operationView:{
    backgroundColor: '#47ffcc',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  
  operationText:{
    fontSize: 95,
    color: '#434343',
  },

  resultView: {
    backgroundColor: '#47ffcc',
    flex: 0.7,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  resultText: {
    fontSize: 80,
    color: '#434343'
  },

  buttonsView: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#434343',
  },
  column:{
   paddingVertical: 15,
   //backgroundColor: 'yellow',
   width: '25%',
    height: '100%'
  },
  columnLast:{
    backgroundColor: '#636363',
    width: '25%',
    height: '100%',
    paddingVertical: 15
  }  
 
});