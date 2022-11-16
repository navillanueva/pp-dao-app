import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import defaultStyles from "../config/styles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Nombre"
          placeholderTextColor={defaultStyles.colors.white}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          placeholderTextColor={defaultStyles.colors.white}
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="google-maps"
          keyboardType="email-address"
          name="email"
          placeholder="Direccion"
          placeholderTextColor={defaultStyles.colors.white}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="wallet-outline"
          keyboardType="email-address"
          name="email"
          placeholder="Cartera"
          placeholderTextColor={defaultStyles.colors.white}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="calendar"
          keyboardType="email-address"
          name="email"
          placeholder="Fecha Nacimiento"
          placeholderTextColor={defaultStyles.colors.white}
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Contraseña"
          placeholderTextColor={defaultStyles.colors.white}
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Registrarse" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    backgroundColor: defaultStyles.colors.background,
    padding: 10,
  },
});

export default RegisterScreen;
