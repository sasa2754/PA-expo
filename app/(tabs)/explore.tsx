import { StyleSheet, Image, Platform, Text, SafeAreaView, ActivityIndicator, View, TextInput, Button, FlatList } from 'react-native';
import { Header } from '@/components/header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '@/components/cardApi';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  loading: {
    alignSelf: 'center',
    margin: 5,
    fontSize: 15
  },

  list: {
    alignSelf: 'center',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  inputContainer: {
    alignItems: 'center',
    // width: 300,
    flexDirection: 'row',
    padding: 10,
    gap: 8
  },

  buttonBox: {
    width: 50,
  },

  input: {
    width: 200,
    height: 30,
    borderColor: '#5A5A5AFF',
    borderWidth: 1,
    borderRadius: 6,
    padding: 5
  }
});

interface Character {
  id: number,
  name: string,
  image: string,
  race: string,
  description: string
}

export default function TabTwoScreen() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<string>('1');

  const fetchCharacters = async (pageNumber : string) => {
    try {
      const response = await axios.get(`https://dragonball-api.com/api/characters?page=${pageNumber}`);
      setCharacters(response.data.items);
    } catch (error) {
      console.log('Erro ao buscar personagens: ', error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacters(page);
  }, []);

  const renderCharacter = ({item} : {item : Character}) => (
    <Card title={item.name} description={item.race} image={item.image}/>
  )

  if (loading) {
    <SafeAreaView style={styles.container}>
      <Header title='Index' image={require("../../assets/images/coroa.png")}/>
      <View style={styles.box}>
        <Text style={styles.loading}>Loading...</Text>
        <ActivityIndicator size='large' color='#F1D9FFFF'/>
      </View>
    </SafeAreaView>
  }
  
  return (
    
    <SafeAreaView style={styles.container}>
      <Header title='Index' image={require("../../assets/images/coroa.png")}/>
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}  onChangeText={(text) => setPage(text)} keyboardType='numeric' placeholder='1/6' />
            <View style={styles.buttonBox}>
              <Button title='Go' onPress={() => fetchCharacters(page)} color="#813CC2FF"/>
            </View>
          </View>
        </View>
        <FlatList data={characters} keyExtractor={(item) => item.id.toString()} renderItem={renderCharacter} contentContainerStyle={styles.list}/>
      </View>
    </SafeAreaView>
    
  );
}
