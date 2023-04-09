import React, { Component } from 'react';

class EventPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      username: '',
    };
    // arrow function 을 사용하면 bind 메서드를 사용하지 않아도 this가 현재 요소를 가리킨다.
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  //   handleChange(e) {
  //     this.setState({
  //       message: e.target.value,
  //     });
  //   }

  //   handleClick(e) {
  //     alert(this.state.message);
  //     this.setState({
  //       message: '',
  //     });
  //   }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      // 객체 안에서 key 를 []로 감싸면 레퍼런스 또는 변수가 가리키는 실제 값이 key값이 된다.
      // input요소의 name property 에 따라 해당 state를 변경한다.
    });
  };

  handleClick = (e) => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력해 보세요"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
// 함수가 호출될때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어짐을 방지하기 위해 bind 메서드로 this pointer를 바인딩한다.
export default EventPractice;
