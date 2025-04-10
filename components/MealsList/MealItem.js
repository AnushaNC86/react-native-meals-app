import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "../MealDetails";

const MealItem = ({ itemData }) => {
  const navigation = useNavigation();

  const selectMealItem = () => {
    navigation.navigate("MealDetailsScreen", { mealId: itemData.id });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={selectMealItem}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: itemData?.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{itemData?.title}</Text>
          </View>
          <MealDetails
            duration={itemData.duration}
            affordability={itemData.affordability}
            complexity={itemData.complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    elevation: 4, // shadow for android
    // shadow for IOS these are needed
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },

  buttonPressed: { opacity: 0.5 },
});
