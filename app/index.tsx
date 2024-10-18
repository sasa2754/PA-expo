import { Header } from "@/components/header"
import { Link, router } from "expo-router"
import { useState } from "react"
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        borderTopStartRadius: 280,
        borderTopEndRadius: 0,
        height: '70%',
        width: '100%',
        backgroundColor: '#ffffff',
        bottom: 0,
        position: 'absolute',
        padding: 10,
        justifyContent: 'center'
    },
    perfil: {
        alignSelf: 'center',
        marginTop: 20,
        width: 160,
        height: 180,
        objectFit: 'scale-down',
    },
    login: {
        maxHeight: 300,
        alignSelf: 'center',
        gap: 35,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Karla',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#952DC5FF'
    },
    label: {
        fontFamily: 'Karla',
        fontSize: 16
    },
    input: {
        borderColor: '#A965C9FF',
        borderWidth: 1,
        width: 280,
        borderRadius: 4,
        height: 30,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    button: {
        width: 150,
        height: 35,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7F40B3FF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    boxButton: {
        alignItems: 'center',
        gap: 10
    },
    inputBox: {
        gap: 20
    }
})

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const onPress = () => {
        router.push("/(tabs)");
    }

    console.log(email, pass);
    console.log(typeof email, typeof pass);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#9E5EC9FF', '#682D97FF', '#192f6a']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.container}
            >
                <Image style={styles.perfil} source={require('../assets/images/perfil.png')}/>
                
                <View style={styles.box}>
                    <View style={styles.login}>

                        <Text style={styles.title}>Login</Text>
                        
                        <View style={styles.inputBox}>
                            <View>
                                <Text style={styles.label}>Email</Text>
                                <TextInput 
                                    style={styles.input} 
                                    onChangeText={setEmail} 
                                    keyboardType="email-address"
                                />
                            </View>
                            
                            <View>
                                <Text style={styles.label}>Senha</Text>
                                <TextInput 
                                    style={styles.input} 
                                    onChangeText={setPass} 
                                    keyboardType="default" 
                                    secureTextEntry
                                />
                            </View>
                        </View>

                        
                        <View style={styles.boxButton}>
                            <TouchableOpacity style={styles.button} onPress={onPress}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Entrar</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection: 'row'}}>
                                <Text>Não tem uma conta? </Text>
                                <Link href={"/register"} style={{color: '#9543BBFF'}}>Cadastrar</Link>
                            </View>
                        </View>

                    </View>
                </View>
            </LinearGradient>
        
        </View>
    )
}
