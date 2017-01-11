import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...this.props}><path d="M12 5.5l-9.4 8c-.8.7-.9 2-.2 2.8s2 .9 2.8.2l6.4-5.5c.1-.1.5-.1.6 0l6.4 5.5c.8.7 2.1.6 2.8-.2.4-.3.6-.8.6-1.3s-.2-1.1-.7-1.5l-9.3-8z" /></svg>;
  }

}