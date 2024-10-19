import { Header } from '@/components/header';
import { Image, StyleSheet, Platform, Text, View, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Index' image={require("../../assets/images/coroa.png")}/>
      <Text>Index das tabs</Text>
    </SafeAreaView>
  );
}
