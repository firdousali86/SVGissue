import {GoogleSpreadsheet} from 'google-spreadsheet';
import {JWT} from 'google-auth-library';
import axios from 'axios';
import {View, Text, Button} from 'react-native';
import {useEffect} from 'react';

const apiKey = 'AIzaSyBC4-DkUn4zb-UVlTUnwWSa1hK2wirMD14'; // Replace with your API key
const spreadsheetId = '1nLUIjOBb566SsltJjlIIPF5_7fhhOsHmdsQZwssXwXg'; // Replace with your spreadsheet ID
const sheetName = 'Sheet1'; // Replace with your sheet name

const GSheet2 = () => {
  onPress = () => {
    console.log(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`,
    );

    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.values);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <View>
      <Text>fdf</Text>
      <Button title="Fetch" onPress={onPress} />
    </View>
  );
};

export default GSheet2;
