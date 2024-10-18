import { Header } from "@/components/header";
import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Register() {
    return (
        <>
            <Header title='Register' image={require("@/assets/images/react-logo.png")}/>
            <Link href={"/"}>☜(ﾟヮﾟ☜)</Link>
            <Text>Cadastro de usuário</Text>
        </>
    )
}