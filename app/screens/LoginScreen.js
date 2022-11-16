import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo3.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardtype="email-address"
          name="email"
          placeholder="Email"
          placeholderTextColor={defaultStyles.colors.white}
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Contraseña"
          placeholderTextColor={defaultStyles.colors.white}
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Iniciar Sesión" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: "30%",
    height: "30%",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    overflow: "visible",
  },
  screen: {
    backgroundColor: defaultStyles.colors.background,
    padding: 10,
  },
});

export default LoginScreen;
