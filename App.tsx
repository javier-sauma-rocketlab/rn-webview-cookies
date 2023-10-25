import CookieManager from '@react-native-cookies/cookies';
import React, {useEffect} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
const uri =
  Platform.OS === 'ios' ? 'http://localhost:3000/' : 'http://10.0.2.2:3000/';
function App(): JSX.Element {
  const setCookie = () => {
    const newCookie = {
      name: 'test',
      value: 'test',
    };
    const useWebKit = true;
    CookieManager.set(uri, newCookie, useWebKit).then(res => {
      console.log('CookieManager.set from webkit-view =>', res);
    });
  };
  CookieManager.clearAll().then(res => {
    console.log('CookieManager.clearAll =>', res);
  });

  useEffect(() => {
    setCookie();
  }, []);

  return (
    <View style={styles.webviewCard}>
      <Text>Show webview</Text>
      <WebView
        source={{
          uri,
          /* This is the example on the webview github documentation but it doesn't work
            headers: {
              Cookie: 'cookie1=asdf; cookie2=fdsa; cookie3=aaaa',
            }, */
        }}
        style={styles.webviewBody}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  webviewCard: {
    flex: 1,
    width: '100%',
    padding: 40,
    paddingTop: 50,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  webviewBody: {
    flex: 1,
    paddingTop: 50,
    border: '1px solid black',
    borderRadius: 10,
  },
});

export default App;
