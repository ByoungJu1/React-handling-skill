import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };
  static propTypes = {
    name: PropTypes.string, //name 은 무조건 string으로 전달해야 된다.
    favoriteNumber: PropTypes.number.isRequired, //favoriteNumber는 무조건 전달되어야 하며 type은 number 여야한다.
  };

  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        안녕하세요. 제 이름은 {name}입니다.
        <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
export default MyComponent;
