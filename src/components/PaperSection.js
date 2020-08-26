import React, { useContext, useEffect } from "react";
import { Label, Segment } from "semantic-ui-react";
import { Media } from "../config/media";
import AppContext from "../context/appContext";

import Logo from "../assets/Logo";
import Articles from "../components/Articles";
import TopStoryArticles from "../components/TopStoryArticles";

const PaperSection = () => {
  const state = useContext(AppContext);
  const { newspaperSection, handleFlipSection } = state;
  useEffect(() => {}, [newspaperSection]);
  return (
    <Segment className="Body" raised color="black">
      {newspaperSection === "viral" ? (
        <>
          <Label
            as="a"
            attached="top left"
            content="Top Stories"
            color="black"
            onClick={() => handleFlipSection("popular")}
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
        </>
      ) : (
        <>
          <Label
            as="a"
            attached="top left"
            content="Most Popular"
            color="orange"
            onClick={() => handleFlipSection("viral")}
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
          <TopStoryArticles />
        </>
      )}
    </Segment>
  );
};

export default PaperSection;
