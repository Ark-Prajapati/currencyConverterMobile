import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import Snackbar from 'react-native-snackbar';
import { currencyByRupee } from './CurrencyByRupee';
import CurrencyIcon from './components/CurrencyIcon';

function App(): React.JSX.Element {

  const [inputValue, setInputValue] = useState('')
  const [finalResult, setFinalResult] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {

    if(!inputValue){
      return Snackbar.show({
        text: "enter a value",
        duration: Snackbar.LENGTH_SHORT,
      })
    }
  
    if(!isNaN(inputValue)){
      const userInput = parseFloat(inputValue)
      const finalValue = userInput * targetValue.value
      const limitedValue = finalValue.toFixed(2)
      setFinalResult(limitedValue)
      setTargetCurrency(targetValue.name)
    }else{
      return Snackbar.show({
        text: "enter a proper number",
        duration: Snackbar.LENGTH_SHORT,
      })
    }

  }

  return (
    <>
    <View style={styles.mainContainer}>
    <View style={styles.upperContainer}>
      <Text style={styles.rupee}>₹</Text>
      <TextInput
      value={inputValue}
      onChangeText={setInputValue}
      placeholder='Enter value in rupees'
      keyboardType='number-pad'
      style={styles.input}
      />
    </View>
    {inputValue && (
      <View style={styles.result}>
        <Text style={styles.resultValue}>{finalResult}</Text>
      </View>
    )}
    <View>
      <FlatList
      numColumns={1}
      data={currencyByRupee}
      keyExtractor={item => item.name}
      renderItem={({item}) => (

        <Pressable
        onPress={() => buttonPressed(item)}
        >
          <CurrencyIcon {...item}/>
        </Pressable>

      )}
      />
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  
  mainContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#FFA384'
  },

  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10
  },

  input: {
    backgroundColor: '#E7F2F8',
    borderRadius: 7,
    padding: 20,
    fontSize: 20
  },

  rupee: {
    fontSize: 30,
    marginRight: 10
  },

  result: {
    backgroundColor: '#E7F2F8',
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
  },

  resultValue: {
    fontSize: 20,
    color: '#111111'
  },

});

export default App;
