export default (state, { type, payload }) => {
  switch (type) {
    case "LOAD_MOST_VIEWED_STORIES":
      return {
        ...state,
        mostPopular: payload,
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
