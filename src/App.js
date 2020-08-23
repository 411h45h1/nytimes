import React from "react";
import "./App.css";
import AppState from "./context/AppState";
import { Grid, Segment } from "semantic-ui-react";
import { MediaContextProvider } from "./config/media";

import Logo from "./assets/Logo";
import Articles from "./components/Articles";

const App = () => {
  return (
    <AppState>
      <MediaContextProvider>
        <div className="App">
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Segment className="Body" inverted color="grey">
                  <Logo width="500" height="70" style={{ marginBottom: 15 }} />
                  <Articles />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </MediaContextProvider>
    </AppState>
  );
};

export default App;
