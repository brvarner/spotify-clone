import React, { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import albumDetails from "../data/albumDetails";
import { SongListItem, AlbumHeader } from "../components";

const album = albumDetails;

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {}, []);

  return (
    <View>
      <View style={{ backgroundColor: "hsla(250, 0%, 7%, 1)" }}>
        <FlatList
          data={album.songs}
          renderItem={({ item }) => <SongListItem song={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => <AlbumHeader album={album} />}
        />
      </View>
    </View>
  );
};

export default AlbumScreen;
