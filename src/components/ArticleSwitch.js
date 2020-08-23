import React, { useState } from "react";

import { Grid, Button } from "semantic-ui-react";

const ArticleSwitch = () => {
  const [mostViewed, setMostViewed] = useState(false);
  const [mostShared, setMostShared] = useState(false);
  const [mostEmailed, setMostEmailed] = useState(false);
  return (
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Button
            compact
            fluid
            toggle
            active={mostViewed}
            content="Most Viewed Articles"
            onClick={() => setMostViewed(!mostViewed)}
          />
        </Grid.Column>
        <Grid.Column>
          <Button
            compact
            fluid
            toggle
            active={mostShared}
            content="Most Shared Articles"
            onClick={() => setMostShared(!mostShared)}
          />
        </Grid.Column>
        <Grid.Column>
          <Button
            compact
            fluid
            toggle
            active={mostEmailed}
            content="Most Emailed Articles"
            onClick={() => setMostEmailed(!mostEmailed)}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ArticleSwitch;
