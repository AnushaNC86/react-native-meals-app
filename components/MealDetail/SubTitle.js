import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#8c4646",
  },
  subTitleContainer: {
    marginVertical: 4,
    marginHorizontal: 24,
    padding: 6,
    borderBottomColor: "#8c4646",
    borderBottomWidth: 2,
  },
});
