import { Header } from '@/components/header';
import { Image, StyleSheet, Platform, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',

  }
});

export default function HomeScreen() {
  return (
    <View>
      <Header title='Index' image={require("../../assets/images/react-logo.png")}/>
      <Text>Turma mara</Text>
    </View>
  );
}
