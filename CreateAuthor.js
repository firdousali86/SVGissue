import {View, Text, TextInput, Button} from 'react-native';
import {useEffect, useState} from 'react';
import {useMutation, gql} from '@apollo/client';

const CREATE_AUTHOR = gql`
  mutation CreateAuthor($name: String!) {
    createAuthor(name: $name) {
      id
      name
    }
  }
`;

const CreateAuthorForm = () => {
  const [value, setValue] = useState('');
  const [createAuthor, {loading, error}] = useMutation(CREATE_AUTHOR);

  return (
    <View>
      <TextInput value={value} onChangeText={setValue} placeholder="Value" />
      <Button
        title={'Create Author'}
        onPress={async () => {
          try {
            const {data} = await createAuthor({
              variables: {name: value},
            });
            console.log('New user created:', data);
            // Optionally, you can perform some action after successful creation
          } catch (error) {
            console.error('Error creating user:', error);
          }
        }}
      />
    </View>
  );
};

export default CreateAuthorForm;
