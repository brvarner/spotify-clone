import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    flexDirection: "row",
    bottom: "6%",
    backgroundColor: Colors.darkModeGray,
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  rightContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    marginLeft: 15,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around'
  },
  title: {
    color: "white",
    fontSize: 18,
    margin: 10,
  },
  artist: {
    color: "lightgray",
    fontSize: 18,
  },
  image: {
    width: 75,
    height: 75,
  },
});
