/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from './src/assets/Icon';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {useQuery, gql} from '@apollo/client';
import CreateAuthor from './CreateAuthor';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

if (__DEV__) {
  require('./ReactotronConfig');
}

const GET_USERS = gql`
  query {
    authors {
      id
      name
    }
  }
`;

const UsersList = () => {
  const {loading, error, data, refetch} = useQuery(GET_USERS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      {data.authors.map(user => (
        <Text key={user.id}>{user.name}</Text>
      ))}
      <CreateAuthor
        onChange={() => {
          refetch();
        }}
      />
    </View>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ApolloProvider client={client}>
          <UsersList />
        </ApolloProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
