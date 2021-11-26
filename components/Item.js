import React, { Component } from 'react';
import { StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <View style={styles.button}>
        <TouchableOpacity onPress={() => this.props.onPress(this.props.type)}>
          <Text style={styles.text}> {this.props.type} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   text:{
       fontSize: 60,
       color: '#ffffff'
   },
   
  });