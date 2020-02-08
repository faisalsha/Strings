import React,{ Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';


class Maps extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Maps PAge</Text>
            </View>
        )
    }
}


export default Maps ;





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0984e3',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  