import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";

const App = () => {
  return (
    <View style={styles.app}>
     <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    width: "100%"
  }
});

export default App;