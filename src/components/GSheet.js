import {GoogleSpreadsheet} from 'google-spreadsheet';
import {View, Text, Button} from 'react-native';
import {useEffect} from 'react';

const SPREADSHEET_ID = '1nLUIjOBb566SsltJjlIIPF5_7fhhOsHmdsQZwssXwXg';

const GSheet = () => {
  onPress = () => {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, {
      apiKey: 'AIzaSyBC4-DkUn4zb-UVlTUnwWSa1hK2wirMD14',
    });

    fetchSheetData(doc);
  };

  const fetchSheetData = async doc => {
    try {
      await doc.loadInfo(); // loads document properties and worksheets
      console.log(doc.title);

      const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
      console.log(sheet.title);
      console.log(sheet.rowCount);

      const rows = await sheet.getRows();
      console.log(rows);
    } catch (err) {
      console.error('Error accessing Google Sheets:', err);
      throw err;
    }
  };

  return (
    <View>
      <Text>fdf</Text>
      <Button title={'Press'} onPress={onPress} />
    </View>
  );
};

export default GSheet;
