import React from "react";

class Button extends React.Component {
  render() {
    let { buttonStyle, content } = this.props;
    return <button style={{margin: '20px 0 0 30px'}} className={`${buttonStyle} button`}>{content}</button>;
  }
}

export default Button