import React from "react";
import { Alert, Container } from "react-bootstrap";
import { Auth0Provider, withAuth0 } from "@auth0/auth0-react";

import LandingPage from "./LandingPageM.jsx";
import Navigation from "./Navigation.jsx";
import Contents from "./Contents.jsx";
import Footer from "./Footer.jsx";
import config from "../config.js";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isAuthenticated, isLoading, error, user } = this.props.auth0;
    // Get's current user data
    // return loading screen to avoid weird flicker
    if (isLoading) {
      return <Alert variant="info">Loading...</Alert>;
    }
    // handle any errors output
    if (error) {
      return <Alert variant="danger">Oops! Something went wrong!</Alert>;
    }
    return (
      <Auth0Provider
        domain={config.domain}
        clientId={config.clientId}
        redirectUri={config.redirectUri}
      >
        {isAuthenticated ? (
          <div>
            <Navigation user={user} />
            <Container
              fluid
              style={{ marginTop: "25px", paddingBottom: "100px" }}
            >
              <Contents user={this.props.auth0.user} />
            </Container>
            <Footer />
          </div>
        ) : (
          <LandingPage />
        )}
      </Auth0Provider>
    );
  }
}

export default withAuth0(Page);
