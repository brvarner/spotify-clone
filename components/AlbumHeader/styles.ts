import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
  },
  creator: {
    color: "lightgray",
    margin: 5,
    fontSize: 15,
  },
  likes: {
    color: "lightgray",
    margin: 5,
    fontSize: 15,
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 10
  },
  button: {
    backgroundColor: "#1CD05D",
    borderRadius: 50,
    height: 60,
    width: 175,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
});
