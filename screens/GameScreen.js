import { Text, View } from "react-native";

function GameScreen({ userNumber }) {
  return (
    <View>
      <Text>Game Screen</Text>
      <Text>Selected Number: {userNumber}</Text>
    </View>
  );
}

export default GameScreen;
