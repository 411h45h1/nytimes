export default (state, { type, payload }) => {
  switch (type) {
    case "LOAD_MOST_VIEWED_STORIES":
      return {
        ...state,
        mostViewedArticles: payload,
      };

    case "LOAD_TOP_STORIES":
      return {
        ...state,
        topStories: payload,
      };

    default:
      return state;
  }
};
