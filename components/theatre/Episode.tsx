import { StyleSheet, View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Octicons, FontAwesome6 } from '@expo/vector-icons';
import SourcesModal from './SourcesModal';
import AskModal from './AskModal';
import RewriteModal from './RewriteModal';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const halfHeight = height / 2;
const IMG_HEIGHT = 400; 

const Episode = ({ isSourcesModalVisible, setIsSourcesModalVisible, sources, isAskModalVisible, setIsAskModalVisible, questions, isRewriteModalVisible, setIsRewriteModalVisible, models }) => {
  return (
    <View>
      <ImageBackground
        source={require('@/assets/images/episode.png')}
        style={styles.image}
        resizeMode="cover"
      >

        {/* Top Section */}
        <View style={styles.header}>
            <Text style={styles.timestamp}>25.11.24</Text>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.channel}>Channel</Text>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomWrapper}>
            <View style={styles.bottom}>
                {/* Sources */}
                <View>
                    <TouchableOpacity onPress={() => setIsSourcesModalVisible(true)} style={styles.sources}>
                        <Text style={styles.sourcesText}>4 Sources</Text>
                        <View style={styles.sourcesIconWrapper}>
                        {[...Array(4)].map((_, i) => (
                            <View key={i} style={[styles.sourcesIcon, { left: i * 10 }]}/>
                        ))}
                        </View>
                    </TouchableOpacity>
                    <SourcesModal
                        visible={isSourcesModalVisible}
                        onClose={() => setIsSourcesModalVisible(false)}
                        sources={sources}
                    />
                </View>

                {/* Ask + Rewrite */}
                <View style={styles.iconWrapper}>
                    <View>
                        <TouchableOpacity onPress={() => setIsAskModalVisible(true)} style={styles.icon}>
                            <Octicons name='question' size={18} color='white'/>
                            <Text style={styles.iconTxt}>Ask</Text>
                        </TouchableOpacity>
                        <AskModal
                            visible={isAskModalVisible}
                            onClose={() => setIsAskModalVisible(false)}
                            questions={questions}
                        />
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={() => setIsRewriteModalVisible(true)} style={styles.icon}>
                            <FontAwesome6 name='repeat' size={18} color='white'/>
                            <Text style={styles.iconTxt}>Rewrite</Text>
                        </TouchableOpacity>
                        <RewriteModal
                            visible={isRewriteModalVisible}
                            onClose={() => setIsRewriteModalVisible(false)}
                            models={models}
                        />
                    </View>
                </View>
            </View>
        </View>

      </ImageBackground>
    </View>
  )
}

export default Episode

const styles = StyleSheet.create({
    image: {
        width: width,
        height: halfHeight
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 45,
        marginTop: 20
    },
    timestamp: {
        color: 'white',
        fontSize: 14
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: '800'
    },
    channel: {
        color: 'white',
        fontSize: 16
    },
    bottomWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 15
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sources: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 16
    },
    sourcesText: {
        color: 'white',
        fontSize: 12,
        marginRight: 8
    },
    sourcesIconWrapper: {
        height: 16,
        width: 30,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    sourcesIcon: {
        position: 'absolute',
        width: 15,
        height: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    iconWrapper: {
        flexDirection: 'row',
        gap: 12
    },
    icon: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },  
    iconTxt: {
        color: 'white',
        fontSize: 12
    }
});