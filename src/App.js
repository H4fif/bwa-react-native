import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import SampleComponent from './pages//SampleComponent';
import StylingComponent from './pages/StylingComponent';
import CallAPIVanilla from './pages/CallAPIVanilla';

const App = () => {
  const [isShow, setIsShow] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false);
  //   }, 6000);
  // }, []);

  return (
    <View>
      <ScrollView>
        {/* <StylingComponent />
        <SampleComponent /> */}
        {/* {isShow && <FlexBox />} */}
        {/* <Position /> */}
        <CallAPIVanilla />
      </ScrollView>
    </View>
  );
};

export default App;