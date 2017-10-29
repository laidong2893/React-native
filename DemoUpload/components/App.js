/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity, Image
} from 'react-native';

import pick from '../api/imgpicker';
import uploadImg from '../api/upload';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      avatarSource: null,
      data: null
    }
  }

  show(){
      pick((source, data) => this.setState({avatarSource: source, data}));
  }

  upload(){
    uploadImg([
      {name : 'info', data: "Lai Dong"},
      { name : 'avatar', filename : 'avatar.png', type:'image/png', data: this.state.data},
    ]).then((resp) => {
        console.log(resp);
    }).catch((err) => {
        console.log(err);
    })
  }

  render() {
    let img = this.state.avatarSource==null? null:
    <Image 
        source={this.state.avatarSource}
        style={{width:200, height: 200}}
    />
    return (
      <View style={styles.container}>
          <Text>ReactNative Image Upload</Text>
          <TouchableOpacity onPress={this.show.bind(this)}>
              <Text>Show Image Picker</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.upload.bind(this)}>
              <Text>Upload Image</Text>
          </TouchableOpacity>
          {img}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
