import React from "react";
import AppPage from "../../components/AppPage/AppPage";
import InfoCard from "../../components/InfoCard/InfoCard";

const ImageTextItem = ({ imgSrc, imgAlt, imgLink, imgSize, text }) => {
  return (
    <div className="container--flex-row">
      <div>
        <a className="image-text-item__link" href={imgLink}>
          <img
            className={
              "image-text-item__image--" +
              (imgSize === "large" ? "large" : "small")
            }
            src={imgSrc}
            alt={imgAlt}
          />
        </a>
      </div>
      <p className="image-text-item__text">{text}</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <AppPage>
      <InfoCard title="About">
        <p>This app was created by Pawel Grimm in 2020.</p>
        <h3>Built With:</h3>
        <div className="container--flex-row">
          <ImageTextItem
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            imgAlt="React Logo"
            imgLink="https://reactjs.org/"
            text=""
          />
          <ImageTextItem
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            imgAlt="NodeJS Logo"
            imgLink="https://nodejs.org/"
            text=""
          />
          <ImageTextItem
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            imgAlt="Express logo"
            imgLink="https://expressjs.com/"
            text=""
          />
          <ImageTextItem
            imgSrc="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg"
            imgAlt="Firebase Logo"
            imgLink="https://firebase.google.com/"
            text=""
          />
        </div>
      </InfoCard>
      <InfoCard title="Credits">
        <ImageTextItem
          imgSrc="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          imgAlt="TMDB Logo"
          imgLink="https://www.themoviedb.org"
          imgSize="large"
          text="This product uses the TMDb API but is not endorsed or certified by TMDb."
        />
      </InfoCard>
    </AppPage>
  );
};

export default AboutPage;
