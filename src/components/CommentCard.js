import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import colors from '../theme/colors';
import spacing from '../theme/spacing';

const CommentCard = ({ item, onPress }) => {
  if (!item) return null;

  const initials = item?.name?.charAt(0)?.toUpperCase() || '?';

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={() => onPress?.(item)}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <View style={styles.userInfo}>
          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>

          <Text numberOfLines={1} style={styles.email}>
            {item.email}
          </Text>
        </View>
      </View>

      {/* Body */}
      <Text numberOfLines={3} style={styles.body}>
        {item.body}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card || '#fff',
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    padding: spacing.md,
    borderRadius: 18,

    borderWidth: 1,
    borderColor: '#eee',

    // softer modern look
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.primary || '#4f46e5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },

  userInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },

  name: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary || '#111',
  },

  email: {
    fontSize: 12,
    color: colors.textSecondary || '#666',
    marginTop: 2,
  },

  body: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.textSecondary || '#444',
  },
});

export default React.memo(CommentCard);