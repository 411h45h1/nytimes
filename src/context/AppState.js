import React, { useReducer, useEffect } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";

const AppState = (props) => {
  const initialState = {
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
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=zE0uXeFH19AB52dh61Pf3gcbxOgciZxS",
      {
        method: "GET",
        redirect: "follow",
      }
    )
      .then(async (response) => {
        let res = await response.json();
        dispatch({ type: "LOAD_MOST_VIEWED_STORIES", payload: res.results });
      })
      .catch((error) => console.log("error", error));
  };

  const onMostSocial = () => {
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/shared/30.json?api-key=zE0uXeFH19AB52dh61Pf3gcbxOgciZxS",
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
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=zE0uXeFH19AB52dh61Pf3gcbxOgciZxS",
      {
        method: "GET",
        redirect: "follow",
      }
    )
      .then(async (response) => {
        let res = await response.json();
        dispatch({ type: "LOAD_MOST_EMAILED_STORIES", payload: res.results });
      })
      .catch((error) => console.log("error", error));
  };

  const onTopStories = (study) => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${study}.json?api-key=zE0uXeFH19AB52dh61Pf3gcbxOgciZxS`,
      {
        method: "GET",
        redirect: "follow",
      }
    )
      .then(async (response) => {
        let res = await response.json();
        console.log("res", res);
      })
      .catch((error) => console.log("error", error));
  };
  console.log("state", state);

  return (
    <AppContext.Provider
      value={{
        mostViewed: state.mostViewed,
        topStories: state.topStories,
        onTopStories,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
