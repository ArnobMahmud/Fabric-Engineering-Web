import React, { Component } from "react";
import ErrorPage from "../screens/Network.js";

export default function (ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false,
    };

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener("online", this.handleConnectionChange);
      window.addEventListener("offline", this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener("online", this.handleConnectionChange);
      window.removeEventListener("offline", this.handleConnectionChange);
    }

    handleConnectionChange = () => {
      const status = navigator.onLine ? "online" : "offline";
      if (status === "online") {
        const webPing = setInterval(() => {
          fetch("//google.com", {
            mode: "no-cors",
          })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing);
              });
            })
            .catch((error) => console.log(error));
        }, 2000);
        return;
      }

      return this.setState({ isDisconnected: true });
    };

    render() {
      const { isDisconnected } = this.state;
      return (
        <>
          {isDisconnected ? (
            <ErrorPage />
          ) : (
            <ComposedComponent {...this.props} />
          )}
        </>
      );
    }
  }
  return NetworkDetector;
}
