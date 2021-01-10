import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Main } from './src/main';
import { ComposeScreen } from './src/ComponseScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: 'メモ帳',
            }}
          />
          <Stack.Screen
            name="Compose"
            component={ComposeScreen}
            options={{
              title: '作成',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
