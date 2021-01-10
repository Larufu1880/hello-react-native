import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';
import { save } from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export const ComposeScreen = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  const onPressSave = async () => {
    await save(text, Date.now().toString());
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={{ marginBottom: 16 }}
        mode="outlined"
        placeholder="メモをここに入力してください"
        multiline
        onChangeText={(inputText) => setText(inputText)}
      />
      <Button mode="contained" onPress={onPressSave}>
        保存
      </Button>
    </KeyboardAvoidingView>
  );
};
