import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
import { connect } from 'react-redux';
import {deletePersonagens} from '../../store/actions/personagens'

class Personagem extends Component {
    render() {
        const {nome, cor} = this.props
        return (
            <View style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.text,{color: cor}]}>{nome}</Text>
            </View>
            <TouchableOpacity onPress={() => {    
                this.props.onDeletePersonagens(nome);
                }}>
                <Ionicons
                    name="md-trash"
                    size={26}
                />
                </TouchableOpacity>           
            </View>
        );
  }
}
  
  const mapDispatchToProps = dispatch => ({
    onDeletePersonagens: (name) => dispatch(deletePersonagens(name))
  });
  
  export default connect(null, mapDispatchToProps)(Personagem);