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
import React, { useEffect, useState } from "react";
import useFetchApi from "../Hooks/useFetchApi";
import { useDispatch, useSelector } from "react-redux";
import { SetProduct } from "../Redux/Actions/ProductActions";
import axios from "axios";

export default function HomeScreen() {
  //getting the Products from store

  const [data, Setdata] = useState();

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    //Setdata(response.data);
    dispatch(SetProduct(response.data));
  };

  const products = useSelector((state) => state.allproducts.products);

  console.log(products, "==");

  useEffect(() => {
    fetchProducts();
  }, []);

  const RenderItem = ({ item, index }) => {
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
          data={products}
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
