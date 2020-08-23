import React, { useContext, useState } from "react";
import { Grid, Segment, Button } from "semantic-ui-react";
import AppContext from "../context/appContext";
import { Media } from "../config/media";

import ArticleItem from "./ArticleItem";

const Articles = () => {
  const state = useContext(AppContext);
  const { mostViewed, mostEmailed, mostSocialMediaShared } = state;

  const [timesSelection, setTimesSelection] = useState("viewed");

  const MostViewedArticles = () => {
    return (
      mostViewed &&
      mostViewed.map((article, k) => {
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
  const MostSocialArticles = () => {
    return (
      mostSocialMediaShared &&
      mostSocialMediaShared.map((article, k) => {
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
  const MostEmailedArticles = () => {
    return (
      mostEmailed &&
      mostEmailed.map((article, k) => {
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

  const renderMostViewed = () =>
    timesSelection !== "viewed" ? setTimesSelection("viewed") : null;

  const renderMostShared = () =>
    timesSelection !== "shared" ? setTimesSelection("shared") : null;

  const renderMostEmailed = () =>
    timesSelection !== "emailed" ? setTimesSelection("emailed") : null;

  return (
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Button
            compact
            fluid
            toggle
            active={timesSelection === "viewed"}
            content="Most Viewed Articles"
            onClick={() => renderMostViewed()}
          />
        </Grid.Column>
        <Grid.Column>
          <Button
            compact
            fluid
            toggle
            active={timesSelection === "shared"}
            content="Most Shared Articles"
            onClick={() => renderMostShared()}
          />
        </Grid.Column>
        <Grid.Column>
          <Button
            compact
            fluid
            toggle
            active={timesSelection === "emailed"}
            content="Most Emailed Articles"
            onClick={() => renderMostEmailed()}
          />
        </Grid.Column>
      </Grid.Row>
      <Segment
        inverted
        loading={!mostViewed}
        style={{
          minHeight: "20vh",
          width: "100%",
          maxHeight: "59vh",
          overflowY: "scroll",
        }}
      >
        {timesSelection === "viewed" ? (
          <>
            <Grid as={Media} at="mobile">
              <Grid.Row centered columns={1}>
                <MostViewedArticles />
              </Grid.Row>
            </Grid>

            <Grid as={Media} at="tablet">
              <Grid.Row centered columns={2}>
                <MostViewedArticles />
              </Grid.Row>
            </Grid>

            <Grid as={Media} at="computer">
              <Grid.Row centered columns={3}>
                <MostViewedArticles />
              </Grid.Row>
            </Grid>
            <Grid as={Media} greaterThanOrEqual="largeScreen">
              <Grid.Row centered columns={4}>
                <MostViewedArticles />
              </Grid.Row>
            </Grid>
          </>
        ) : timesSelection === "shared" ? (
          <>
            <Grid as={Media} at="mobile">
              <Grid.Row centered columns={1}>
                <MostSocialArticles />
              </Grid.Row>
            </Grid>

            <Grid as={Media} at="tablet">
              <Grid.Row centered columns={2}>
                <MostSocialArticles />
              </Grid.Row>
            </Grid>

            <Grid as={Media} at="computer">
              <Grid.Row centered columns={3}>
                <MostSocialArticles />
              </Grid.Row>
            </Grid>
            <Grid as={Media} greaterThanOrEqual="largeScreen">
              <Grid.Row centered columns={4}>
                <MostSocialArticles />
              </Grid.Row>
            </Grid>
          </>
        ) : timesSelection === "emailed" ? (
          <>
            <Grid as={Media} at="mobile">
              <Grid.Row centered columns={1}>
                <MostEmailedArticles />
              </Grid.Row>
            </Grid>

            <Grid as={Media} at="tablet">
              <Grid.Row centered columns={2}>
                <MostEmailedArticles />
              </Grid.Row>
            </Grid>

            <Grid as={Media} at="computer">
              <Grid.Row centered columns={3}>
                <MostEmailedArticles />
              </Grid.Row>
            </Grid>
            <Grid as={Media} greaterThanOrEqual="largeScreen">
              <Grid.Row centered columns={4}>
                <MostEmailedArticles />
              </Grid.Row>
            </Grid>
          </>
        ) : null}
      </Segment>
    </Grid>
  );
};

export default Articles;
