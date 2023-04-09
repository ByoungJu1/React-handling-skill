import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
          ref={(ref) => (this.input = ref)}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
// state만으로 해결이안되는 상황
// 특정 input 포커스
// 스크롤 박스 조작
// Canvas 요소에 그림그리기
// 이 때는 어쩔 수 없이 DOM에 직접적으로 접근해야하기때문에 ref를 사용한다.
export default ValidationSample;
