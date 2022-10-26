import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AlbumType } from "../../types";
import React from "react";

type AlbumProps = {
  album: AlbumType;
};

const Album = (props: AlbumProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("AlbumScreen", { id: props.album.id });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Album;
