import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Pies from "./dosage/pills/pies";
import { calculate, getHistory } from "../../api";
import History from "./history";

export default function Dashboard(props) {
  const [inr, setInr] = useState(null);
  const [dosage, setDosage] = useState("");
  const [history, setHistory] = useState([]);

  const onChangeInr = (newInr) => {
    setInr(newInr);
  };

  const handleCalculate = async () => {
    const res = await calculate(inr);
    setDosage(res.dosage);
  };

  const handleGetHistory = async () => {
    const res = await getHistory();
    setHistory(res);
  };

  useEffect(() => {
    handleGetHistory();
  }, []);

  const isButtonDisabled = inr === "";

  return (
    <View>
      <Text>Mon Dashboard</Text>
      <TextInput
        onChangeText={onChangeInr}
        value={inr}
        placeholder="Saisissez votre INR"
        keyboardType="numeric"
      />
      <Button
        disabled={isButtonDisabled}
        onPress={handleCalculate}
        title="Calculer"
        accessibilityLabel="Clic here to get your calculation"
      />
      <Pies portions={dosage} />
      <History history={history} />
    </View>
  );
}
