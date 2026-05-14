import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CommentsListScreen from '../screens/CommentsListScreen';
import CommentDetailScreen from '../screens/CommentDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CommentsList"
          component={CommentsListScreen}
          options={{title: 'Comments'}}
        />

        <Stack.Screen
          name="CommentDetail"
          component={CommentDetailScreen}
          options={({route}) => ({
            title: route.params.comment.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;