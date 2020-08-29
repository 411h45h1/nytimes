import React, { useReducer, useEffect } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
const key = "zE0uXeFH19AB52dh61Pf3gcbxOgciZxS";
const address = "https://api.nytimes.com/svc";

const AppState = (props) => {
  const initialState = {
    newspaperSection: "viral",
    mostViewed: null,
    mostEmailed: null,
    mostSocialMediaShared: null,
    topStories: null,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { mostViewed, mostEmailed, mostSocialMediaShared } = state;

  useEffect(() => {
    return !mostViewed
      ? onMostViewed()
      : !mostEmailed
      ? onMostEmailed()
      : !mostSocialMediaShared
      ? onMostSocial()
      : undefined;
  }, [mostViewed, mostEmailed, mostSocialMediaShared]);

  const onMostViewed = () => {
    fetch(`${address}/mostpopular/v2/viewed/1.json?api-key=${key}`, {
      method: "GET",
      redirect: "follow",
    })
      .then(async (response) => {
        let res = await response.json();
        dispatch({ type: "LOAD_MOST_VIEWED_STORIES", payload: res.results });
      })
      .catch((error) => console.log("error", error));
  };

  const onMostSocial = () => {
    fetch(
      `${address}/mostpopular/v2/shared/1.json?api-key=${key}`,

      {
        method: "GET",
        redirect: "follow",
      }
    )
      .then(async (response) => {
        let res = await response.json();
        dispatch({ type: "LOAD_MOST_SHARED_STORIES", payload: res.results });
      })
      .catch((error) => console.log("error", error));
  };

  const onMostEmailed = () => {
    fetch(`${address}/mostpopular/v2/emailed/1.json?api-key=${key}`, {
      method: "GET",
      redirect: "follow",
    })
      .then(async (response) => {
        let res = await response.json();
        dispatch({ type: "LOAD_MOST_EMAILED_STORIES", payload: res.results });
      })
      .catch((error) => console.log("error", error));
  };

  const onTopStories = (section) => {
    fetch(`${address}/topstories/v2/${section}.json?api-key=${key}`, {
      method: "GET",
      redirect: "follow",
    })
      .then(async (response) => {
        let res = await response.json();
        dispatch({ type: "LOAD_TOP_STORIES", payload: res.results });
      })
      .catch((error) => console.log("error", error));
  };

  const handleFlipSection = (section) =>
    dispatch({ type: "FLIP_SECTION", payload: section });

  // console.log("state", state);

  return (
    <AppContext.Provider
      value={{
        newspaperSection: state.newspaperSection,
        mostViewed: state.mostViewed,
        mostEmailed: state.mostEmailed,
        mostSocialMediaShared: state.mostSocialMediaShared,
        topStories: state.topStories,
        onTopStories,
        handleFlipSection,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
