import React from "react";
import { Segment, Image, Header, Label, Card } from "semantic-ui-react";

const ArticleItem = ({
  abstract,
  title,
  author,
  media,
  url,
  pubDate,
  section,
}) => {
  return (
    <Segment style={{ margin: 10 }}>
      <Header as="h3">
        {title}
        <Header.Subheader>{author}</Header.Subheader>
      </Header>

      <Card
        fluid
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginBottom: 30 }}
      >
        {media && media.length > 0 ? (
          <Image src={media[0]["media-metadata"][2].url} wrapped ui={false} />
        ) : null}

        <Card.Content>
          <Card.Description>{abstract}</Card.Description>
        </Card.Content>
      </Card>

      <Label
        size="tiny"
        attached="bottom right"
        color="teal"
      >{`Published: ${pubDate}`}</Label>

      {section && (
        <Label
          size="tiny"
          attached="bottom left"
          color="grey"
        >{`Section: ${section}`}</Label>
      )}
    </Segment>
  );
};

export default ArticleItem;
