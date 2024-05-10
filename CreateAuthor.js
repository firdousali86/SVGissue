import {View, Text, TextInput, Button} from 'react-native';
import {useEffect, useState} from 'react';

const CreateAuthor = () => {
  const [value, setValue] = useState('');
  return (
    <View>
      <TextInput value={value} onChangeText={setValue} placeholder="Value" />
      <Button title={'Create Author'} onPress={() => {}} />
    </View>
  );
};

export default CreateAuthor;
