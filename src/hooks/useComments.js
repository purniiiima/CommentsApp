import {useCallback, useEffect, useState} from 'react';
import {fetchComments} from '../api/commentsApi';

const LIMIT = 10;

const useComments = () => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadComments = useCallback(async (pageNumber = 1) => {
    try {
      pageNumber === 1 ? setLoading(true) : setLoadingMore(true);

      const data = await fetchComments(pageNumber, LIMIT);

      if (data.length < LIMIT) {
        setHasMore(false);
      }

      setComments(prev =>
        pageNumber === 1 ? data : [...prev, ...data],
      );

      setPage(pageNumber);
      setError(false);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  const loadMore = () => {
    if (loadingMore || !hasMore) {
      return;
    }

    loadComments(page + 1);
  };

  const refresh = () => {
    setHasMore(true);
    loadComments(1);
  };

  return {
    comments,
    loading,
    error,
    loadMore,
    loadingMore,
    refresh,
  };
};

export default useComments;