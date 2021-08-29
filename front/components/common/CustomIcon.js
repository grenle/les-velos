import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function CustomIcon({ name, color }) {
  return <MaterialCommunityIcons name={name} color={color} size={26} />;
}
