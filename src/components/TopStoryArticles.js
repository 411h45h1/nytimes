import React, { useContext, useState } from "react";
import { Grid, Segment, Select } from "semantic-ui-react";
import AppContext from "../context/appContext";
import { Media } from "../config/media";

import ArticleItem from "./ArticleItem";

const TopStoryArticles = () => {
  const state = useContext(AppContext);
  const [timesSelection, setTimesSelection] = useState("viewed");

  const { onTopStories, topStories } = state;

  const TopStories = () => {
    return (
      topStories &&
      topStories.map((article, k) => {
        return (
          <Grid.Column key={k}>
            <ArticleItem
              abstract={article.abstract}
              title={article.title}
              author={article.byline}
              media={article.media}
              url={article.url}
              pubDate={article.published_date}
              section={article.nytdsection}
            />
          </Grid.Column>
        );
      })
    );
  };

  const renderTopStories = (section) => {
    onTopStories(section);
    return timesSelection !== "topStories"
      ? setTimesSelection("topStories")
      : null;
  };

  const storyOption = [
    { key: "us", value: "us", text: "US" },
    { key: "world", value: "world", text: "World" },
    { key: "arts", value: "arts", text: "Arts" },
    { key: "travel", value: "travel", text: "Travel" },
    { key: "books", value: "books", text: "Books" },
    { key: "business", value: "business", text: "Business" },
    { key: "fashion", value: "fashion", text: "Fashion" },
    { key: "food", value: "food", text: "Food" },
    { key: "science", value: "science", text: "Science" },
    { key: "sports", value: "sports", text: "Sports" },
    { key: "health", value: "health", text: "Health" },
    { key: "insider", value: "insider", text: "Insider" },
    { key: "magazine", value: "magazine", text: "Magazine" },
    { key: "movies", value: "movies", text: "Movies" },
    { key: "nyregion", value: "nyregion", text: "New York Region" },
    { key: "obituaries", value: "obituaries", text: "Obituaries" },
    { key: "opinion", value: "opinion", text: "Opinion" },
    { key: "politics", value: "politics", text: "Politics" },
    { key: "home", value: "home", text: "Home" },
    { key: "technology", value: "technology", text: "Technology" },
    { key: "upshot", value: "upshot", text: "The Upshot" },
    { key: "theater", value: "theater", text: "Theater" },
    { key: "t-magazine", value: "t-magazine", text: "T-Magazine" },
    { key: "automobiles", value: "automobiles", text: "Automobiles" },
    { key: "sundayreview", value: "sundayreview", text: "Sunday Review" },
    { key: "realestate", value: "realestate", text: "Realestate" },
  ];

  return (
    <Grid>
      <div style={{ marginTop: 40, marginBottom: 20, minWidth: "90vw" }}>
        <p style={{ fontSize: 30, fontWeight: "bold" }}>Top Stories</p>
        <Select
          fluid
          placeholder="Sections"
          options={storyOption}
          onChange={(e, { value }) => renderTopStories(value)}
        />
      </div>

      {topStories && (
        <>
          <Media at="mobile">
            <Segment
              inverted
              loading={!topStories}
              style={{
                maxHeight: "70vh",
                overflowY: "scroll",
              }}
            >
              <Grid>
                <Grid.Row centered columns={1}>
                  <TopStories />
                </Grid.Row>
              </Grid>
            </Segment>
          </Media>
          <Media at="tablet">
            <Segment
              inverted
              loading={!topStories}
              style={{
                maxHeight: "65vh",
                overflowY: "scroll",
              }}
            >
              <Grid>
                <Grid.Row centered columns={2}>
                  <TopStories />
                </Grid.Row>
              </Grid>
            </Segment>
          </Media>
          <Media at="computer">
            <Segment
              inverted
              loading={!topStories}
              style={{
                maxHeight: "67vh",
                overflowY: "scroll",
              }}
            >
              <Grid>
                <Grid.Row centered columns={3}>
                  <TopStories />
                </Grid.Row>
              </Grid>
            </Segment>
          </Media>
          <Media greaterThanOrEqual="largeScreen">
            <Segment
              inverted
              loading={!topStories}
              style={{
                maxHeight: "68vh",
                overflowY: "scroll",
              }}
            >
              <Grid>
                <Grid.Row centered columns={4}>
                  <TopStories />
                </Grid.Row>
              </Grid>
            </Segment>
          </Media>
        </>
      )}
    </Grid>
  );
};

export default TopStoryArticles;
