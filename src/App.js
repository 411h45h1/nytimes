import React from "react";
import "./App.css";
import AppState from "./context/AppState";
import { Grid, Segment } from "semantic-ui-react";
import Logo from "./assets/Logo";

const App = () => {
  return (
    <AppState>
      <div className="App">
        <Grid columns={1}>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment className="Body" inverted color="grey">
                <Logo width="500" height="70" />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </AppState>
  );
};

export default App;
