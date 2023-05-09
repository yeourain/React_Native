import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function AboutPage() {
        const aboutImage = "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3"
    return (
        <View style={styles.container}>
            <Text style={styles.title}>안녕하세요! 어바웃 페이지 입니다!</Text>
            <View style={styles.textContainer}>
                <Image style={styles.aboutImage} source={{uri:aboutImage}} resizeMode={"cover"}/>
                <Text style={styles.desc01}>간결하게 노력했습니다!</Text>
                <Text style={styles.desc02}>앞으로 잘 부탁드리겠습니다!</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>인스타계정</Text>
                </TouchableOpacity>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#1F2666",
        alignItems:"center"
    },
    title: {
        fontSize:25,
        fontWeight:"700",
        color:"#fff",
        paddingLeft:30,
        paddingTop: 100,
        paddingRight:30
    },
    textContainer: {
        width:300,
        height:500,
        backgroundColor:"#fff",
        marginTop:50,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    aboutImage: {
        width:150,
        height:150,
        borderRadius:30
    },
    desc01: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        paddingLeft:22,
        paddingRight:22
    },
    desc02: {
        textAlign:"center",
        fontSize:15,
        fontWeight:"700",
        padding:22
    },
    button: {
        backgroundColor:"orange",
        borderRadius:15,
        padding:20
    },
    buttonText: {
        color:"#fff",
        fontSize: 15,
        fontWeight:"700"
    }
})