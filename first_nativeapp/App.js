import React,{Component} from 'react';
import { ImageBackground,StyleSheet,View,Image,Text } from 'react-native';


class App extends Component{
  render(){
    return(
      <ImageBackground style={styles.background} source={require("./assets/maxresdefault.jpg")}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("./assets/favicon.png")} />
          <Text>This is a demo for first time.</Text>
        </View>
        <View style={styles.loginbutton}></View>
        <View style={styles.registerbutton}></View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  background:{
    flex:1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginbutton:{
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerbutton:{
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo:{
    width: 100,
    height: 100,
    
  },
  logocontainer:{
    alignItems: "center",
    position: "absolute",
    top: 70,
    
  },
})

export default App;