import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome6 } from '@expo/vector-icons';

const Social = () => {
    const data = Array(6).fill({});
    const router = useRouter();

    const renderItem = ({ item }) => (
        <View style={styles.listItem}/>
    )

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Social</Text>
                <View>
                    <TouchableOpacity onPress={() => router.push("/theatre/social")} style={styles.icon}>
                        <View style={styles.iconTxtWrapper}>
                            <Text style={styles.iconTxt}>6</Text>
                        </View>
                        <FontAwesome6 name='angle-right' size={18} color={Colors.primaryColorBlack}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* List */}
            <FlatList
                data={data}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.list}
            />

        </View>
    )
}

export default Social

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconTxtWrapper: {
        backgroundColor: Colors.primaryColorRed,
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    iconTxt: {
        color: 'white',
        fontSize: 12
    },
    list: { 
        paddingRight: 10
    },
    listItem: {
        width: 100,
        height: 100,
        backgroundColor: Colors.secondaryColorLightGrey,
        borderRadius: 8,
        marginRight: 12
    }
});