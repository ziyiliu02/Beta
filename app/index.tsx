import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { useFonts } from 'expo-font';

const Page = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'PermanentMarker': require('@/assets/fonts/PermanentMarker-Regular.ttf'),
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.logoWrapper}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logoImage}/>
        <Text style={styles.logoText}>Cherrypick</Text>
      </View>
      <View style={styles.authWrapper}>
        <TouchableOpacity onPress={() => router.push("/auth/register")} style={styles.registerBtn}>
          <Text style={styles.registerBtnTxt}>Join :)</Text>
        </TouchableOpacity>
        <Text style={styles.loginWrapper}>
          Already have an account?
          <TouchableOpacity onPress={() => router.replace("/(tabs)")} style={{ marginTop: -2}}> 
            <Text style={styles.loginTxt}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColorYellow
  },
  logoWrapper: {
    flex: 4, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    width: 150,
    height: 150
  },
  logoText: {
    fontFamily: 'PermanentMarker',
    fontSize: 32,
    color: 'white'
  },
  authWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50
  },
  registerBtn: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 20
  },
  registerBtnTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primaryColorYellow,
    textAlign: 'center'
  },
  loginWrapper: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center'
  }, 
  loginTxt: {
    color:'white',
    fontWeight: '800',
    marginLeft: 5
  }
});
