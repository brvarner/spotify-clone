import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { AlbumCategory, View } from "../components";
import { listAlbumCategories } from "../src/graphql/queries";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [categories, setCategories] = useState([]);

  const fetchAlbumCategories = async () => {
    try {
      const data = await API.graphql(graphqlOperation(listAlbumCategories));
      setCategories(data.data.listAlbumCategories.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAlbumCategories();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums.items} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
