import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import useFetchApi from "../Hooks/useFetchApi";

export default function HomeScreen() {
  const { data, loading, status } = useFetchApi("products");

  console.log(data);

  const RenderItem = ({ item, index }) => {
    console.log(item.id, "rm func");

    return (
      <View style={styles.itemcontainer} key={index}>
        <Image
          source={{ uri: item.image }}
          style={{
            height: 200,
            width: 150,
            // backgroundColor: "green",
            resizeMode: "center",
            padding: 5,
          }}
        />
        <View
          style={{
            width: 150,
            alignSelf: "center",
            //  backgroundColor: "red",
            marginTop: 10,
          }}
        >
          <Text style={styles.namestyle} numberOfLines={2}>
            {item.title}{" "}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.txtstyle}> New In</Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <RenderItem item={item} index={index} />;
          }}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  txtstyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  itemcontainer: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    alignSelf: "center",
    paddingHorizontal: 20,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  namestyle: {
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
