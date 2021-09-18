import * as React from 'react';
import { WebView } from 'react-native-webview';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

export default class App extends React.Component {

  adFunction = async() => {
    await AdMobInterstitial.setAdUnitID('ca-app-pub-1154234843774755/8931235829'); // Test ID, Replace with your-admob-unit-id 
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true}); 
    await AdMobInterstitial.showAdAsync();
  }
  componentDidMount(){
    this.adFunction();
  }

  render() {


    return (
      <WebView source={{ uri: 'https://www.hangil-kim.com/post/%E7%A7%81%E3%81%AF%E3%83%8A%E3%83%8B%E3%82%AC%E3%82%AA-remake' }} style={{ marginTop: 20 }}/>

    )
  }
}


