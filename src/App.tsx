/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { ReactElement, ReactNode, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView
} from 'react-native';
import dracula from './themes/dracula';

const App = () => {
  let [state, setState] = useState<Array<ReactElement>>([])
  let [text, setText] = useState<string>("")
  const colourJS = (fileString: string): Array<ReactElement> => {
    return
  }

  const dohickyidk = (a: string) => {
    setText(a)
    setState(colourJS(a))
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{
        flex: 1,
        backgroundColor: dracula.base.BG
      }}>
        <SafeAreaView style={{
          flex: 1
        }}>
          <ScrollView style={{
            flex: 1
          }}>
            <View style={{
              flex: 1,
              padding: 10,
              flexDirection: 'row'
            }}>
              <Text style={{
                marginLeft: 10,
                minWidth: 30,
                color: dracula.other.WHITE,
                marginTop: 4,
                textAlign: "right",
                fontFamily: 'Share Tech Mono'
              }}>
                {text.split("\n").map((a, i) => i + 1).join("\n")}
              </Text>
              <TextInput onChangeText={dohickyidk}
                multiline
                style={{
                  flex: 1,
                  color: dracula.base.FG,
                  paddingLeft: 15,
                  flexGrow: 1,
                  fontFamily: 'Share Tech Mono'
                }}>
              </TextInput>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default App;
