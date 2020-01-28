import React from 'react';
import { Modal, View, Text, ActivityIndicator } from 'react-native';
import styles from './styles'
const CustomLoading = ({ visible }) => (
  <Modal transparent animationType="none" visible={visible}>
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.loading}>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color='yellow'/>
          </View>
        </View>
        <Text style={styles.title}>Carregando...</Text>
      </View>
    </View>
  </Modal>
);

export default CustomLoading;

