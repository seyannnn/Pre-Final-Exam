import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style ={styles.container}>
      <Text style={styles.text}>Sean Mark A. Udtohan BSIT-2B</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 30
  },
});
