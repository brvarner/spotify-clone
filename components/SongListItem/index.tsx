import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";
import { Song } from "../../types";
import { AppContext } from "../../AppContext";
import React, { useContext } from "react";

type SongListItemProps = { song: Song };

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;
  const { setSongId } = useContext(AppContext);
  const onPlay = () => {
    setSongId(song.id);
  };
  return (
    <TouchableWithoutFeedback onPress={onPlay}>
      <View style={styles.container}>
        <Image source={{ uri: props.song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{props.song.title}</Text>
          <Text style={styles.artist}>{props.song.artist}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SongListItem;
