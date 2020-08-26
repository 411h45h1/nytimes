import React from "react";
import "./App.css";
import AppState from "./context/AppState";
import { Grid } from "semantic-ui-react";
import { MediaContextProvider } from "./config/media";

import PaperSection from "./components/PaperSection";

const App = () => {
  return (
    <AppState>
      <MediaContextProvider>
        <div className="App">
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <PaperSection />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </MediaContextProvider>
    </AppState>
  );
};

export default App;
