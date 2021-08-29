//Avec cette lib on peut sauvegarder de la donnée localement sur le device, elle sont conservées entre 2 sessions
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  const serialized = JSON.stringify(value);
  await AsyncStorage.setItem(key, serialized);
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    return null;
  }
};

export const deleteData = async (key) => {
  await AsyncStorage.removeItem(key);
};