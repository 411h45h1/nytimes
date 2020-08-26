export default (state, { type, payload }) => {
  switch (type) {
    case "LOAD_MOST_VIEWED_STORIES":
      return {
        ...state,
        mostViewed: payload,
      };

    case "LOAD_MOST_EMAILED_STORIES":
      return {
        ...state,
        mostEmailed: payload,
      };

    case "LOAD_MOST_SHARED_STORIES":
      return {
        ...state,
        mostSocialMediaShared: payload,
      };

    case "LOAD_TOP_STORIES":
      return {
        ...state,
        topStories: payload,
      };

    case "FLIP_SECTION":
      return {
        ...state,
        newspaperSection: payload,
      };

    default:
      return state;
  }
};
