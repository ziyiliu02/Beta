import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';

const BioAuthButton = () => {
  return (
    <View>
        <View style={styles.btnWrapper}>
            <TouchableOpacity style={styles.btn}>
                <View style={styles.btnContent}>
                    <Text style={styles.btnTxt}>Touch ID</Text>
                    <Ionicons name='finger-print' size={20} color={'white'}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <View style={styles.btnContent}>
                    <Text style={styles.btnTxt}>Face Recognition</Text>
                    <FontAwesome6 name='smile' size={20} color={'white'}/>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default BioAuthButton

const styles = StyleSheet.create({
    btnWrapper: {
        marginTop: 10
    },
    btn: {
        backgroundColor: Colors.primaryColorBlack,
        paddingVertical: 12,
        paddingHorizontal: 18,
        alignSelf: 'stretch',
        borderRadius: 8,
        marginVertical: 10,
        height:50
    },
    btnContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    btnTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 2
    },
})