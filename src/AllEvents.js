import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList,Image,TouchableNativeFeedback } from "react-native";
import data from "../db";

class AllEvents extends Component {
  state = {
    data: data
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ width: "100%" }}
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Details',{...item})}>
                <View style={{ marginVertical: 20, marginHorizontal: 15,borderRadius:19,backgroundColor:'#ced6eo',elevation:19 }}>
                  <View
                    style={{
                      padding: 15,
                      backgroundColor: "#86dfe5",
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15
                    }}
                  >
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {item.eventName}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems:'baseline'
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "baseline" }}
                      >
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Type</Text>
                        <Text style={{fontSize:12,fontWeight:'bold'}}>{item.genre}</Text>
                      </View>
                      <Text>{item.date}</Text>
                    </View>
                  </View>
                  <View>
                  <Image source={{uri:item.image}} style={{width:360,height:200,borderTopLeftRadius:15,borderTopRightRadius:15,flex:1,alignSelf:'stretch'}}  />
                  </View>
                </View>
              </TouchableNativeFeedback>
            );
          }}
        />
      </View>
    );
  }
}

export default AllEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f2f6"
  }
});
