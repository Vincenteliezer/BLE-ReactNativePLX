import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
});

export default HomeScreen;
