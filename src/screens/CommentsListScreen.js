import React, { useCallback, useMemo, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

import CommentCard from '../components/CommentCard';
import Loader from '../components/Loader';
import ErrorView from '../components/ErrorView';
import FooterLoader from '../components/FooterLoader';

import useComments from '../hooks/useComments';

import colors from '../theme/colors';
import spacing from '../theme/spacing';

const CommentsListScreen = ({ navigation }) => {
  const {
    comments,
    loading,
    error,
    loadMore,
    loadingMore,
    refresh,
  } = useComments();

  const [search, setSearch] = useState('');

  const handlePress = useCallback(
    (item) => {
      navigation.navigate('CommentDetail', {
        comment: item,
      });
    },
    [navigation],
  );

  const filteredComments = useMemo(() => {
    if (!search.trim()) return comments;

    return comments.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.body.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, comments]);

  const renderItem = useCallback(
    ({ item }) => {
      return <CommentCard item={item} onPress={handlePress} />;
    },
    [handlePress],
  );

  if (loading) return <Loader />;
  if (error) return <ErrorView onRetry={refresh} />;

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.searchWrapper}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search comments..."
          placeholderTextColor="#888"
          style={styles.searchBar}
        />
      </View>

      {filteredComments.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No comments found 😕</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.listContent}
          data={filteredComments}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            loadingMore ? <FooterLoader /> : null
          }
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          removeClippedSubviews={true}
          refreshing={false}
          onRefresh={refresh}
        />
      )}
    </SafeAreaView>
  );
};

export default CommentsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },

  searchWrapper: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    backgroundColor: '#F7F8FA',
  },

  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,

    borderWidth: 1,
    borderColor: '#EAEAEA',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },

    elevation: 2,
  },

  listContent: {
    paddingVertical: spacing.sm,
    paddingBottom: spacing.xl,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  emptyText: {
    fontSize: 16,
    color: '#8A8A8A',
    textAlign: 'center',
    lineHeight: 22,
  },
});