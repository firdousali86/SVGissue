// MyForm.js
import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import useForm from "./useForm";

const MyForm = () => {
  const { values, errors, handleChange, handleSubmit, isValid } = useForm({
    name: "",
    email: "",
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Handle form submission (e.g., API call)
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={values.name}
        onChangeText={(value) => handleChange("name", value)}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={values.email}
        onChangeText={(value) => handleChange("email", value)}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <Button
        title="Submit"
        onPress={() => handleSubmit(onSubmit)}
        disabled={!isValid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default MyForm;
