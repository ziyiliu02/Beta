import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';

const LoginForm = () => {
    const router = useRouter();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.formWrapper}>
            <TextInput 
                placeholder='Email' 
                placeholderTextColor={Colors.secondaryColorLightGrey} 
                style={[styles.inputField, isFocused && styles.inputFieldFocused]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <TextInput 
                placeholder='Password' 
                placeholderTextColor={Colors.secondaryColorLightGrey} 
                style={[styles.inputField, isFocused && styles.inputFieldFocused]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <View style={styles.formTextWrapper}>
                <Text style={styles.formText}>Forgot password?</Text>
            </View>
            <TouchableOpacity onPress={() => router.replace("/(tabs)")} style={styles.loginBtn}>
              <Text style={styles.loginBtnTxt}>Enter :)</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    formWrapper: {
      paddingVertical: 20,
      paddingHorizontal: 10
    },
    inputField: {
      backgroundColor: 'white',
      paddingVertical: 12,
      paddingHorizontal: 18,
      alignSelf: 'stretch',
      borderRadius: 8,
      fontSize: 16,
      borderWidth: 1,
      borderColor: Colors.secondaryColorGrey,
      marginVertical: 8,
      height:50
    },
    inputFieldFocused: {
      borderColor: Colors.primaryColorBlack,  // iOS blue color or your app's primary color
      borderWidth: 2,
    },
    formTextWrapper: {
        justifyContent: 'flex-end',
        marginTop: 10
    },
    formText: {
        alignSelf: 'flex-end', 
        fontWeight: '800'
    },
    loginBtn: {
      backgroundColor: Colors.primaryColorBlack,
      paddingVertical: 12,
      paddingHorizontal: 18,
      alignSelf: 'stretch',
      borderRadius: 8,
      marginVertical: 20,
      height:48
    },
    loginBtnTxt: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center'
    },
});