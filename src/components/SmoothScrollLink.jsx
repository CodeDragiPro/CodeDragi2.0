import React from "react";

class SmoothScrollLink extends React.Component {
  scrollToSection = () => {
    const element = document.getElementById(this.props.targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <a onClick={this.scrollToSection}>{this.props.children}</a>
    );
  }
}

export default SmoothScrollLink;
