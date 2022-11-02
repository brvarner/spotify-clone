import { View, Text, Image, TouchableOpacity, AppState } from "react-native";
import { styles } from "./styles";
import { FontAwesome, EvilIcons } from "@expo/vector-icons";
import React, { useEffect, useState, useContext } from "react";
import { Sound } from "expo-av/build/Audio/Sound";
import { AppContext } from "../../AppContext";
import { API, graphqlOperation } from "aws-amplify";
import { getSong } from "../../src/graphql/queries";

const song = {
  id: "1",
  uri: "https://ia601401.us.archive.org/26/items/cowboy-bebop-tank-the-best/04%20-%20DIAMONDS.mp3",
  imageUri:
    "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
  title: "DIAMONDS",
  artist: "The Seatbelts",
};

const PlayerWidget = () => {
  const [song, setSong] = useState(null);
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);
  const { songId } = useContext(AppContext);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );

    setSound(newSound);
  };

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }

    return (position / duration) * 100;
  };

  const fetchSong = async () => {
    try {
      const data = await API.graphql(graphqlOperation(getSong, { id: songId }));
      setSong(data.data.getSong);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchSong();
  }, [songId]);

  useEffect(() => {
    if (song) {
      playCurrentSong();
    }
  }, [song]);

  if (!song) {
    return null;
  }

  return (
    // Still trying to figure out how to dynamically set up the player widget to remove its
    // bottom when the page in Navigation = Album
    <View style={[styles.container, { bottom: `6%` }]}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <FontAwesome
              name="circle"
              size={4}
              color="lightgray"
              style={{ right: "1%", top: "1%", marginHorizontal: 5 }}
            />
            <Text style={styles.artist}>{song.artist}</Text>
          </View>

          <View style={styles.iconContainer}>
            <EvilIcons name="heart" size={40} color="white" />
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome
                name={isPlaying ? "pause" : "play"}
                size={25}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
