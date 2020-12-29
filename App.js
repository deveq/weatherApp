import { Alert,  } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import React from 'react';
import Weather from './Weather';

const API_KEY = '8648cabb2df9fe9ca9625d5d3a42f5a1';
const API_KEY2 = '241051bf13976dd3ddf8b8d9f247255e';

export default class App extends React.Component {

  state = {
    isLoading: true,
  };

  getWeather = async(lat, long) => {
    const { 
      data: {
        main : {temp},
        weather
      }
     } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false, 
        temp,
        condition: weather[0].main,
      })
  }

  getLocation = async() => {
    try {
      //위치 허용
      await Location.requestPermissionsAsync();

      // 위도 경도 받아오기
      const { 
        coords : { latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      // 
      this.getWeather(latitude, longitude);
    } catch (error) {
      //Alert.alert(제목, 내용)
      Alert.alert("Cant't find you.","So sad");
    }
  }


  componentDidMount() {
    //마운트 되었을때 한 번 location을 get함
    this.getLocation();
  }
   

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={"Sexy"}/>
    
  }
};
