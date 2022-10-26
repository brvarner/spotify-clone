import { View, Text, Image, TouchableOpacity } from "react-native";
import { AlbumType } from "../../types";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { styles } from "./styles";

type AlbumHeaderProps = {
  album: AlbumType;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.album.imageUri }} style={styles.image} />
      <Text style={styles.name}>{props.album.name}</Text>
      <View style={styles.creatorContainer}>
        <Text style={styles.creator}>By {props.album.by} </Text>
        <FontAwesome
          name="circle"
          size={6}
          color="lightgray"
          style={{ marginHorizontal: 5, marginTop: 14 }}
        />
        <Text style={styles.likes}>{props.album.numberOfLikes} Likes</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
