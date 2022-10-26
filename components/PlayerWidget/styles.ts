import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "6%",
    backgroundColor: Colors.darkModeGray,
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  rightContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    marginLeft: 15,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    justifyContent: "space-around",
  },
  title: {
    color: "white",
    fontSize: 15,
  },
  artist: {
    color: "lightgray",
    fontSize: 15,
  },
  image: {
    width: 75,
    height: 75,
  },
  progress: {
    height: 3,
    backgroundColor: "hsla(0, 0%, 74%, 1)",
  },
  row: {
    flexDirection: "row",
  },
});
