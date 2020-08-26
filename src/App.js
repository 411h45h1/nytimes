import React from "react";
import "./App.css";
import AppState from "./context/AppState";
import { Grid, Label, Segment } from "semantic-ui-react";
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
                <Segment className="Body" raised color="black">
                  <Label
                    as="a"
                    attached="top left"
                    content="Top Stories"
                    color="black"
                  />
                  <Label
                    as="a"
                    color="black"
                    attached="top right"
                    content="Click here for the repository"
                    href="https://github.com/AhmedAlihashi/nytimes"
                    target="_blank"
                    rel="noopener noreferrer"
                  />

                  <Media at="mobile">
                    <Logo style={{ marginTop: 20, marginBottom: 15 }} />
                  </Media>

                  <Media at="tablet">
                    <Logo style={{ marginTop: 20, marginBottom: 15 }} />
                  </Media>

                  <Media at="computer">
                    <Logo style={{ marginTop: 20, marginBottom: 15 }} />
                  </Media>

                  <Media greaterThan="computer">
                    <Logo
                      style={{
                        marginTop: 25,
                        marginBottom: 15,
                        height: "20vh",
                      }}
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
