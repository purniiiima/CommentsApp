import React, {useLayoutEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import colors from '../theme/colors';
import spacing from '../theme/spacing';

const CommentDetailScreen = ({route, navigation}) => {
  const {comment} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: comment.name,
    });
  }, [navigation, comment]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{comment.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{comment.email}</Text>

        <Text style={styles.label}>Post ID</Text>
        <Text style={styles.value}>{comment.postId}</Text>

        <Text style={styles.label}>Comment</Text>
        <Text style={styles.body}>{comment.body}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CommentDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.lg,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  label: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '700',
    marginTop: spacing.md,
    marginBottom: spacing.xs,
    textTransform: 'uppercase',
  },

  value: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.textPrimary,
  },

  body: {
    fontSize: 16,
    lineHeight: 28,
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },
});