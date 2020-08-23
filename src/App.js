import React from "react";
import "./App.css";
import AppState from "./context/AppState";
import { Grid, Button, Segment } from "semantic-ui-react";
import { MediaContextProvider } from "./config/media";

import Logo from "./assets/Logo";
import Articles from "./components/Articles";

import { Media } from "./config/media";

const App = () => {
  return (
    <AppState>
      <MediaContextProvider>
        <div className="App">
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Segment className="Body" inverted color="grey">
                  <Grid>
                    <Grid.Column width={16}>
                      <Button
                        compact
                        size="small"
                        color="black"
                        floated="right"
                        content="Click here for the repository"
                        as={"a"}
                        href="https://github.com/AhmedAlihashi/nytimes"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    </Grid.Column>
                  </Grid>
                  <Media at="mobile">
                    <Logo style={{ marginTop: 5, marginBottom: 15 }} />
                  </Media>

                  <Media at="tablet">
                    <Logo style={{ marginTop: 5, marginBottom: 15 }} />
                  </Media>

                  <Media at="computer">
                    <Logo style={{ marginTop: 5, marginBottom: 15 }} />
                  </Media>

                  <Media greaterThan="computer">
                    <Logo
                      style={{ marginTop: 5, marginBottom: 15, height: "20vh" }}
                    />
                  </Media>

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
