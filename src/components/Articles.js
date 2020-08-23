import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const Articles = () => {
  return (
    <Grid>
      <Grid.Row centered columns={1}>
        <Grid.Column>
          <Segment inverted style={{ marginBottom: 10 }}>
            <Segment>a</Segment>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Articles;
