import React, { Component } from 'react';

class Counter extends Component {
  //컴포넌트에 state를 설정할 때 constructor(생성자 메서드)  사용

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    // state 조희시 this.state 사용
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
