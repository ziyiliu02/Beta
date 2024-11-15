import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements';
import LoginForm from '@/components/auth/LoginForm';
import BioAuthButton from '@/components/auth/BioAuthButton';

const login = () => {
    const router = useRouter();
    const headerHeight = useHeaderHeight();

    return (
        <>
        <Stack.Screen options={{
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                    <View>
                        <FontAwesome name='angle-left' size={30} color={Colors.primaryColorBlack}/>
                    </View>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => router.push("/")}>
                  <View>
                    <Entypo name='cross' size={30} color={Colors.primaryColorBlack}/>
                  </View>
                </TouchableOpacity>
            )
        }}/>
        <View style={[styles.container, { paddingTop: headerHeight }]}>
            <Text style={styles.headingTxt}>Welcome back! 🥳</Text>
            <LoginForm/>

            <View style={styles.separatorContainer}>
                <View style={styles.separatorLine}/>
                <Text style={styles.separatorTxt}>Or join with</Text>
                <View style={styles.separatorLine}/>
            </View>

            <BioAuthButton/>

            <Text style={styles.registerTextWrapper}>
                Don't have an account?
                <TouchableOpacity onPress={() => router.push("/auth/register")} style={{ marginTop: -2}}> 
                <Text style={styles.registerText}>Join</Text>
                </TouchableOpacity>
            </Text>
        </View>
        </>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        padding: 20
    },
    headingTxt: {
        fontSize: 28,
        fontWeight: '800',
        color: Colors.primaryColorBlack,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        paddingHorizontal: 10
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.primaryColorBlack
    },
    separatorTxt: {
        marginHorizontal: 10,
        color: Colors.primaryColorBlack,
        fontSize: 14
    },
    registerTextWrapper: {
        color: Colors.primaryColorBlack,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 15
    }, 
    registerText: {
        color: Colors.primaryColorBlack,
        fontWeight: '800',
        marginLeft: 5
    }
  });