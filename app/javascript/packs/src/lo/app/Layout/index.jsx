import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Template from './Template';

class Layout extends Component {
  constructor (props) {
    super (props);

    this.state = {
      isOpenSide: false,
    }

    this.handleToggleSide = this.handleToggleSide.bind(this);
  }

  handleToggleSide () {
    let { isOpenSide } = this.state;
    this.setState({ isOpenSide: !isOpenSide })
  }

  render () {
    let {
      children,
      sideLinks,
      onClickLink,
      loName,
      userName,
      back,
      previewPercent,
      progressPercent,
      userImage,
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Template
          isOpenSide={this.state.isOpenSide}
          onToggleSide={this.handleToggleSide}
          sideLinks={sideLinks}
          onClickLink={onClickLink}
          loName={loName}
          userName={userName}
          userImage={userImage}
          previewPercent={previewPercent}
          progressPercent={progressPercent}
          back={back}
        >
          {children}
        </Template>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  sideLinks: PropTypes.array.isRequired,
};

export default Layout;
