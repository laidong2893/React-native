import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: ''
        };
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        const { en, vn } = this.state;
        if(en == "" || vn == "") return;
        this.props.dispatch({ 
            type: 'ADD_WORD',
            en,
            vn
        });
        this.props.dispatch({ 
            type: 'TOGGLE_IS_ADDING'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.en}
                    onChangeText={text => this.setState({ en: text })}
                    placeholder="English word"
                    underlineColorAndroid="transparent"
                />
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.vn}
                    onChangeText={text => this.setState({ vn: text })}
                    placeholder="Meaning"
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity style={{ alignSelf: 'center',}} onPress={this.onAdd}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(Form);

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    textInput: {
        height: 40,
        backgroundColor: '#E4F6D4',
        margin: 10,
        paddingHorizontal: 10
    }
});