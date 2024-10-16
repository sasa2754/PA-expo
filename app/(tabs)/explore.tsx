import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text } from 'react-native';
import { Header } from '@/components/header';


export default function TabTwoScreen() {
  return (
    <>
      <Header title='Explore' image={require("../../assets/images/react-logo.png")}/>
      <Text>Segunda pag</Text>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
