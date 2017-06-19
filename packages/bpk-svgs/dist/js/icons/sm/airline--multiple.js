import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M8.5 17.562h9.625L21.952 7.54c.179-.468-.148-.978-.627-.978h-1.187c-.45 0-.882.183-1.207.51L8.5 17.562zm5.456-8.199c.159-.383-.132-.8-.557-.8h-1.055c-.4 0-.784.149-1.073.417L2 17.562h5.498l5.244-5.274 1.214-2.925z" /></svg>;
  }

}