import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { titles, colors, btn1, hr80 } from '../../globals/style'
import { FontAwesome5, FontAwesome, Octicons } from '@expo/vector-icons';

 const LoginScreen = ({navigation}) => {
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [showpassword, setShowPassword] = useState(false);




   return (
    <View style={styles.container}>
        
        <Text style={styles.head1}>Welcome to Zippo</Text>

        <View style={styles.inputout}>


        <FontAwesome5 name="user-alt" size={24} color={emailfocus === true? colors.text1: colors.text2} />

            <TextInput style={styles.input} placeholder="Email" 
            onFocus={() => {
                setEmailfocus(true)
                setPasswordfocus(false)
                setShowPassword(false)
            }} />
        </View>

        <View style={styles.inputout}>

        <FontAwesome5 name="lock" size={24} color={passwordfocus === true? colors.text1: colors.text2} />

            <TextInput style={styles.input} placeholder="Password" onFocus={() => {
                setEmailfocus(false)
                setPasswordfocus(true)
            }} 

            secureTextEntry={showpassword === false ? true : false}

            />

            <Octicons name={showpassword==false ? "eye-closed" : "eye"} size={24} color="black" onPress={()=>
            setShowPassword(!showpassword)} />
        </View>

        <TouchableOpacity style={btn1} onPress={()=> navigation.navigate("home")}> 
        <Text style={{color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold"}}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.forgot}> Forgot Password?</Text>
        <Text style={styles.or}>OR</Text>
        <Text style={styles.gftxt}>Login With</Text>

        <View style={styles.gf}>
            <TouchableOpacity>
                <View style={styles.gficon}>
                <FontAwesome name="google" size={24} color="red" />
                </View>            
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.gficon}>
                <FontAwesome name="facebook" size={24} color="blue" />
                </View>            
            </TouchableOpacity>

        </View>
        <View style={hr80}></View>
        <Text>Don't have an account? 
        <Text style={styles.signup} onPress={()=> navigation.navigate("signup")}> Sign Up</Text>
        </Text>
        

    </View>
     
   )
 }

 const styles = StyleSheet.create({
    container:{
        flex:1,
        width : '100%',
        alignItems : 'center',
        justifyContent: 'center',
    },
    head1: {
        margin: '5%',
        fontSize: titles.title1,
        color: colors.text1,
        textAlign: 'center',
    },
    inputout : {
        flexDirection : 'row',
        width : '80%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical : 10,
        alignSelf: 'center',
        elevation: 20,
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '80%',
    },
    forgot :{
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10,
    },
    or :{
        color: colors.text1,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    gftxt :{
        color: colors.text2,
        marginVertical: 10,
        fontSize : 25,
    },
    gf :{
        flexDirection: 'row',
    },
    gficon:{
        backgroundColor: 'white',
        width: 50,
        margin: 10,
        borderRadius : 30,
        padding: 10,
        alignItems: 'center',
        elevation: 10,
    },
    signup:{
        color: colors.text1,

    }
 })
 
 export default LoginScreen