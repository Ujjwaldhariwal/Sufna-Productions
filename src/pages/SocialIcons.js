// SocialIcons.js

import React from 'react';

class SocialIcons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileView: false,
      github: '',
      codepen: '',
      facebook: '',
      twitter: ''
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
    this.setState({ isMobileView: isMobile });
  }

  renderSocialIcons() {
    const { github, codepen, facebook, twitter } = this.props;

    if (this.state.isMobileView && (github || codepen || facebook || twitter)) {
      return (
        <div className="ssIcons">
          {github && <span className="ssIcon gh"><a href={github}><i className="fa fa-github"></i></a></span>}
          {codepen && <span className="ssIcon cp"><a href={codepen}><i className="fa fa-codepen"></i></a></span>}
          {facebook && <span className="ssIcon fb"><a href={facebook}><i className="fa fa-facebook"></i></a></span>}
          {twitter && <span className="ssIcon tw"><a href={twitter}><i className="fa fa-twitter"></i></a></span>}
        </div>
      );
    }

    return null; // Return null if not in mobile view or no social links provided
  }

  render() {
    return (
      <div>
        {this.renderSocialIcons()}
      </div>
    );
  }
}

export default SocialIcons;
