import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M14.1 9L7.6 1.5C7.1.9 6.1.8 5.5 1.4c-.6.5-.7 1.5-.1 2.1l4.5 5.2c.1.1.1.5 0 .6l-4.5 5.2c-.5.6-.5 1.6.1 2.1.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5L14.1 9z" /></svg>;
  }

}