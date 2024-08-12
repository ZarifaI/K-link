import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import styles from "../assets/styles";

// Import the image from assets
const kLinkImage = require("../assets/images/k-link.png");

const City = () => (
  <TouchableOpacity style={styles.city}>
    <Text style={styles.cityText}>
      <Image source={kLinkImage} style={styles.cityImage} />
      -Link
    </Text>
  </TouchableOpacity>
);

export default City;

