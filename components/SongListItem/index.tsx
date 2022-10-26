import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Song } from "../../types";
import React from "react";

type SongListItemProps = { song: Song };

const SongListItem = (props: SongListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{props.song.title}</Text>
        <Text style={styles.artist}>{props.song.artist}</Text>
      </View>
    </View>
  );
};

export default SongListItem;
