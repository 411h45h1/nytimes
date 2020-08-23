import React, { useContext, useState } from "react";
import {
  Grid,
  Segment,
  Image,
  Header,
  Label,
  Card,
  Button,
} from "semantic-ui-react";
import AppContext from "../context/appContext";
import { Media } from "../config/media";

const Articles = () => {
  const state = useContext(AppContext);
  const { mostViewedArticles } = state;

  const [timesSelection, setTimesSelection] = useState("viewed");

  const RenderedArticles = () =>
    mostViewedArticles &&
    mostViewedArticles.map((article, k) => {
      return (
        <Grid.Column key={k}>
          <Segment style={{ margin: 10 }}>
            <Header as="h3">
              {article.title}
              <Header.Subheader>{article.byline}</Header.Subheader>
            </Header>

            <Card fluid href={article.url} style={{ marginBottom: 30 }}>
              {article.media.length > 0 ? (
                <Image
                  src={article.media[0]["media-metadata"][2].url}
                  wrapped
                  ui={false}
                />
              ) : null}

              <Card.Content>
                <Card.Description>{article.abstract}</Card.Description>
              </Card.Content>
            </Card>

            <Label
              attached="bottom right"
              color="teal"
            >{`Published: ${article.published_date}`}</Label>

            {article.subsection && (
              <Label
                attached="bottom left"
                color="grey"
              >{`Section: ${article.subsection}`}</Label>
            )}
          </Segment>
        </Grid.Column>
      );
    });

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
            onClick={() => setTimesSelection("viewed")}
          />
        </Grid.Column>
        <Grid.Column>
          <Button
            compact
            fluid
            toggle
            active={timesSelection === "shared"}
            content="Most Shared Articles"
            onClick={() => setTimesSelection("shared")}
          />
        </Grid.Column>
        <Grid.Column>
          <Button
            compact
            fluid
            toggle
            active={timesSelection === "emailed"}
            content="Most Emailed Articles"
            onClick={() => setTimesSelection("emailed")}
          />
        </Grid.Column>
      </Grid.Row>
      <Segment
        inverted
        loading={!mostViewedArticles}
        style={{
          minHeight: "20vh",
          width: "100%",
          maxHeight: "60vh",
          overflowY: "scroll",
        }}
      >
        <Grid as={Media} at="mobile">
          <Grid.Row centered columns={1}>
            <RenderedArticles />
          </Grid.Row>
        </Grid>

        <Grid as={Media} at="tablet">
          <Grid.Row centered columns={2}>
            <RenderedArticles />
          </Grid.Row>
        </Grid>

        <Grid as={Media} at="computer">
          <Grid.Row centered columns={3}>
            <RenderedArticles />
          </Grid.Row>
        </Grid>
        <Grid as={Media} greaterThanOrEqual="largeScreen">
          <Grid.Row centered columns={4}>
            <RenderedArticles />
          </Grid.Row>
        </Grid>
      </Segment>
    </Grid>
  );
};

export default Articles;
