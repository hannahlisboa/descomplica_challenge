import React, { Component } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';
import styles from './styles'
import { connect } from 'react-redux';
import { setTextInput } from '../../store/actions/palavras';
import LogoTitle from '../../components/LogoTitle'


class PalavrasCountScreen extends Component {

    static navigationOptions = {
        headerTitle: () => <LogoTitle />,
    };
  
  render() {
    const {textInput, countValues, onSetTextInput} = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={styles.text_input}
            placeholder="insira o texto"
            onChangeText={(text) => onSetTextInput(text)}
            value={textInput}
          />
          <Text style={styles.text}>
            {countValues}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ palavras }) => ({
  textInput: palavras.textInput,
  countValues: palavras.countValues
});

const mapDispatchToProps = dispatch => ({
  onSetTextInput: (text) => dispatch(setTextInput(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(PalavrasCountScreen);