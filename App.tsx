import React from 'react';
import {View, Text, Button} from 'react-native';

export const FlowEntryScreen = ({onComplete}: {onComplete: () => void}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to the SDK Flow</Text>
      <Button title="Done" onPress={onComplete} />
    </View>
  );
};
