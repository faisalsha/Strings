import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, Linking } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Communications from 'react-native-communications';

class Detail extends Component {
  render() {
    const map = (
      <Icon style={{ paddingRight: 5 }} name="map" color="black" size={20} />
    );
    const form = (
      <Icon style={{ paddingRight: 5 }} name="copy" color="black" size={20} />
    );
    const phone = (
      <Icon style={{ paddingRight: 5 }} name="phone" color="black" size={20} />
    );
    const params = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={{ height: 250, width: "100%", alignSelf: "stretch" }}>
          <Image
            resizeMode="contain"
            source={{ uri: params.image }}
            style={{
              borderRadius: 12,
              width: "100%",
              height: "100%",
              alignSelf: "stretch",
              flex: 1
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 18,
              alignItems: "baseline"
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Type : </Text>
            <Text>{params.genre}</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {params.date}
          </Text>
        </View>
        <View style={{ marginTop: 15, flexDirection: "row" }}>
          <View style={{ marginRight: 20 }}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Maps')}
              style={{
                elevation:6,
                flexDirection: "row",
                padding: 12,
                borderRadius: 6,
                backgroundColor: "#86dfe5"
              }}
            >
              {map}
              <Text
                style={{ color: "black", fontSize: 19, fontWeight: "bold" }}
              >
                {" "}
                Map
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginRight: 20 }}>
            {params.contact != null && (
              <TouchableOpacity
              onPress={()=>Communications.phonecall(params.contact,true)}
                style={{
                    elevation:6,
                  flexDirection: "row",
                  padding: 12,
                  borderRadius: 6,
                  backgroundColor: "#86dfe5"
                }}
              >
                {phone}
                <Text
                  style={{ color: "black", fontSize: 19, fontWeight: "bold" }}
                >
                  {" "}
                  Call
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={{ marginRight: 20 }}>
            {params.form != null && (
              <TouchableOpacity
              onPress={() => Linking.openURL(params.form)}
                style={{
                    elevation:6,
                  flexDirection: "row",
                  padding: 12,
                  borderRadius: 6,
                  backgroundColor: "#86dfe5"
                }}
              >
                {form}
                <Text
                  style={{ color: "black", fontSize: 19, fontWeight: "bold" }}
                >
                  {" "}
                  Form
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={{marginTop:8}}>
        <Text style={{fontSize:24,fontWeight:'bold'}}>{params.eventName}</Text>
        </View>
        <ScrollView style={{marginTop:6}}>
        <View>
            <Text style={{lineHeight:23,fontSize:19}}>{params.eventDetail}</Text>
        </View>
        </ScrollView>
        
      </View>
    );
  }
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 9,
    margin:8
  }
});
