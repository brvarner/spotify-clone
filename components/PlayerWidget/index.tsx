import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { FontAwesome, EvilIcons } from "@expo/vector-icons";
import React from "react";

const song = {
  id: "1",
  imageUri:
    "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
  title: "High on You",
  artist: "Helen",
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <FontAwesome name="circle" size={4} color="lightgray" style={{right: '9%', top: '1%'}} />
          <Text style={styles.artist}>{song.artist}</Text>
        </View>

        <View style={styles.iconContainer}>
          <EvilIcons name="heart" size={40} color="white" />
          <FontAwesome name="play" size={25} color="white" />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
