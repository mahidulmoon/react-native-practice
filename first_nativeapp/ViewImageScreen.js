import React,{Component} from 'react';
import { Image,StyleSheet } from 'react-native';



class ViewImageScreen extends Component {
    render() {
        return (
            <Image style={styles.background} source={require("./assets/maxresdefault.jpg")} />
        );
    }
}
const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
    },
})
export default ViewImageScreen;