import { RedditLogo } from 'phosphor-react-native';
import { Button, ImageBackground, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

export default function Box() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]}/>
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
}

const styles = StyleSheet.create({
  box:{
    backgroundColor:"red",
    width:100,
    height:50
  }
})

