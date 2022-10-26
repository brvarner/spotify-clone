import { FlatList, Text, View } from "react-native";
import React from "react";
import { AlbumType } from "../../types";
import { styles } from "./styles";
import Album from "../Album";

type AlbumCategoryProps = {
  title: string;
  albums: [AlbumType];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AlbumCategory;
