import React, { Component } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { getPersonagens } from '../../store/actions/personagens';
import Personagem from '../../components/Personagem'
import CustomLoading from '../../components/CustomLoading'
import styles from './styles'
 class PersonagensScreen extends Component {

  static navigationOptions = {
    title: 'STAR WARS',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: 'yellow',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  static tabBarOptions = {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'blue',
    },
  }

  componentDidMount() {
    this.props.onGetPersonagens();
  }

  render() {
    const {personagens, isFetching} = this.props
    return (
      <SafeAreaView style={styles.container}>
        <CustomLoading  visible={isFetching} />
      <FlatList
        data={personagens}
        renderItem={({ item }) => <Personagem nome={item.name} cor={item.eye_color}/>}
        keyExtractor={(item, index) => 'key'+index}
        />
    </SafeAreaView>
     );
  }
}

const mapStateToProps = ({ personagens }) => ({
  personagens: personagens.listPersonagens,
  isFetching: personagens.isFetching
});

const mapDispatchToProps = dispatch => ({
  onGetPersonagens: () => dispatch(getPersonagens())
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonagensScreen);