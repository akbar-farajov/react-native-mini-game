import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
  const handleButtonPress = () => {
    console.log("Button Pressed");
  };
  return (
    <Pressable onPress={handleButtonPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#992a61b6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 28,
    elevation: 2,
    margin: 4,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
