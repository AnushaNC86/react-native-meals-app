import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 24,
    backgroundColor: "#d18c8c",
  },
  itemText: {
    color: "#4d1521",
    textAlign: "center",
  },
});
