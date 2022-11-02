import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { SongListItem, AlbumHeader } from "../components";
import { getAlbum } from "../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

const AlbumScreen = () => {
  const [album, setAlbum] = useState(null);
  const route = useRoute();
  const albumId = route.params.id;
  const fetchAlbumDetails = async () => {
    try {
      const data = await API.graphql(
        graphqlOperation(getAlbum, { id: albumId })
      );
      setAlbum(data.data.getAlbum);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAlbumDetails();
  }, []);

  if (!album) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <View style={{ backgroundColor: "hsla(250, 0%, 7%, 1)" }}>
        <FlatList
          data={album.songs.items}
          renderItem={({ item }) => <SongListItem song={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => <AlbumHeader album={album} />}
        />
      </View>
    </View>
  );
};

export default AlbumScreen;
