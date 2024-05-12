import {View, Text} from 'react-native';

const HOC = ({children}) => {
  const someamazingcalc = ['apple', 'banana', 'mango'];

  return (
    <View style={{backgroundColor: 'red', margin: 10}}>
      <Text>test</Text>
      {children(someamazingcalc)}
    </View>
  );
};

export default HOC;
