import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        alignItems: 'center',
        justifyContent: 'center'
      },
      content: {
        padding: 35,
        backgroundColor: 'rgba(0, 0, 0, .77)',
        borderRadius: 10
      },
      title: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'yellow'
      },
      loading: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      loader: {
        flex: 1
      },
      loadingContent: {
        fontSize: 16
      }
});
