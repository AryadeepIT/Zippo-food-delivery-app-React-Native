import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { titles, colors, btn1, hr80 } from '../../globals/style'
import { FontAwesome5, FontAwesome, Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

 const SignupScreen = ({navigation}) => {
    const [namefocus, setNamefocus] = useState(false);
    const [emailfocus, setEmailfocus] = useState(false);
    const [phonefocus, setPhonefocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [showpassword, setShowPassword] = useState(false);
    const [showcpassword, setShowcPassword] = useState(false);
    const [cpasswordfocus, setcPasswordfocus] = useState(false);




   return (
    <View style={styles.container}>
        
        <Text style={styles.head1}>Create New Account</Text>

{/* Full Name start */}

<View style={styles.inputout}>


<FontAwesome5 name="user-alt" size={24} color={namefocus === true? colors.text1: colors.text2} />

    <TextInput style={styles.input} placeholder="Full Name" 
    onFocus={() => {
        setNamefocus(true)
        setEmailfocus(false)
        setPhonefocus(false)
        setPasswordfocus(false)
        setcPasswordfocus(false)
    }} />
</View>


{/* Full Name End */}

{/* Email start */}

        <View style={styles.inputout}>

        <MaterialIcons name="alternate-email" size={24} color={emailfocus === true? colors.text1: colors.text2} />

            <TextInput style={styles.input} placeholder="Email" 
            onFocus={() => {
                setNamefocus(false)
                setEmailfocus(true)
                setPhonefocus(false)
                setPasswordfocus(false)
                setcPasswordfocus(false)
            }} />
        </View>


{/* Email End */}

{/* Phone No Start */}

<View style={styles.inputout}>


        <FontAwesome5 name="phone-alt" size={24} color={phonefocus === true? colors.text1: colors.text2} />

            <TextInput style={styles.input} placeholder="Phone Number" 
            onFocus={() => {
                setNamefocus(false)
                setEmailfocus(false)
                setPhonefocus(true)
                setPasswordfocus(false)
                setcPasswordfocus(false)
            }} />
        </View>



{/* Phone No End */}

 {/* password start  */}

        <View style={styles.inputout}>

        <FontAwesome5 name="lock" size={24} color={passwordfocus === true? colors.text1: colors.text2} />

            <TextInput style={styles.input} placeholder="Password" onFocus={() => {
                setNamefocus(false)
                setEmailfocus(false)
                setPhonefocus(false)
                setPasswordfocus(true)
                setcPasswordfocus(false)
            }} 

            secureTextEntry={showpassword === false ? true : false}

            />

            <Octicons name={showpassword==false ? "eye-closed" : "eye"} size={24} color="black" onPress={()=>
            setShowPassword(!showpassword)} />
        </View>




      {/* Confirm Password start */}
        <View style={styles.inputout}>

        <FontAwesome5 name="lock" size={24} color={cpasswordfocus === true? colors.text1: colors.text2} />

            <TextInput style={styles.input} placeholder="Confirm Password" onFocus={() => {
                setNamefocus(false)
                setEmailfocus(false)
                setPhonefocus(false)
                setPasswordfocus(true)
                setcPasswordfocus(true)
            }} 

            secureTextEntry={showcpassword === false ? true : false}

            />

            <Octicons name={showcpassword==false ? "eye-closed" : "eye"} size={24} color="black" onPress={()=>
            setShowcPassword(!showcpassword)} />
        </View>
        {/* Confirm Password end */}

 {/* password end  */}

        <Text style={styles.address}>Please Enter Your Address</Text>
        <View style={styles.inputout}>
            <TextInput style={styles.input1} placeholder="Enter Your Address" />
        </View>

        <TouchableOpacity style={btn1}> 
        <Text style={{color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold"}}>Create Account</Text>
        </TouchableOpacity>

        {/* <Text style={styles.forgot}> Forgot Password?</Text> */}
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
        <Text>Already have an account? 
        <Text style={styles.signup} onPress={()=> navigation.navigate("login")}> Login</Text>
        </Text>
        

    </View>
     
   )
 }

 const styles = StyleSheet.create({
    container:{
        flex:1,
        width : '100%',
        alignItems : 'center',
        marginTop : 60,
        // justifyContent: 'center',
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
        marginBottom: 10,
        fontSize : 25,
    },
    gf :{
        flexDirection: 'row',
    },
    gficon:{
        backgroundColor: 'white',
        width: 50,
        marginHorizontal: 10,
        borderRadius : 30,
        padding: 10,
        alignItems: 'center',
        elevation: 10,
    },
    signup:{
        color: colors.text1,

    },
    address : {
        fontSize : 15,
        color: colors.text2,
        textAlign: 'center',
        marginTop: 20,
    }
 })
 
 export default SignupScreen