import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

//npm install prop-types

const weatherOptions = {
    Haze : {
        iconName: 'weather-hail',
        gradient : ["#4DA0B0", "#D39D38"],
        title : 'Haze',
        subtitle : "Just don't go outside."
    },
Thunderstorm :{
    iconName : 'weather-lightning',
    gradient : ["#355C7D","#6C5B7B"], //#C06C84
    title: "Thunderstorm",
    subtitle: "번개친다 나가지마라",
},
Drizzle : {
    iconName : 'weather-cloudy',
    gradient : ["#a8ff78","#78ffd6"],
    title: "Drizzle",
    subtitle: "흩뿌린다는건가",
},
Rain : {
    iconName : 'weather-pouring',
    gradient : ["#005AA7","#FFFDE4"],
    title: "Rain",
    subtitle: "비가 오다니",
},
Snow : {
    iconName : 'weather-snowy',
    gradient : ["#a8c0ff","#3f2b96","#FF8C00",],
    title: "Snow",
    subtitle: "눈온당",
},
Clear : {
    iconName : 'white-balance-sunny',
    gradient : ["#7F7FD5","#91EAE4" ],
    title: "Clear",
    subtitle: "날씨가 좋아요",
},
Atmosphere : {
    iconName : 'weather-sunny',
    gradient : ["#FF416C","#FF4B2B"],
    title: "Atmosphere",
    subtitle: "읭?",
},
Clouds : {
    iconName : 'weather-cloudy',
    gradient : ["#3E5151","#DECBA4"],
    title: "Clouds",
    subtitle: "흐려요",
},
Dust : {
    iconName : 'weather-fog',
    gradient : ["#659999","#f4791f"],
    title: "Dust ",
    subtitle: "먼지 ㅠㅠ",
},
Mist : {
    iconName : 'weather-cloudy',
    gradient : ["#8360c3","#2ebf91"],
    title: "Mist ",
    subtitle: "안개. ㅠㅠ",
},
}

export default Weather = ({ temp, condition }) => {
    return (
        <LinearGradient 
        colors={weatherOptions[condition].gradient}
        style={styles.container}
        >
            <StatusBar barStyle='light-content'/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName} //없을 경우 대비
                    size={86}
                    color='white'
                />
                <Text style={styles.temp}>{temp}'</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>)
}


// TypeScript처럼 props의 타입 혹은 값을 지정
// isRequired는 필수항목
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Clear',
        'Atmosphere',
        'Clouds',
        'Haze',
        'Mist',
        'Dust',
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 36,
        color: 'white',

    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom : 10,
    },
    subtitle: {
        color: 'white',
        fontWeight:'600',
        fontSize: 24,
    },
    textContainer : {
        paddingHorizontal: 20,
        alignItems:'flex-start',
    }
})