import React, { Component } from 'react';

class Counter extends Component {
  //컴포넌트에 state를 설정할 때 constructor(생성자 메서드)  사용
  constructor(props) {
    super(props);
    // 반드시 super(props) 호출
    // 호출 되면 현재 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출

    // state의 초기값 설정 (객체형식)
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    // state 조희시 this.state 사용
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값: {fixedNumber}</h1>
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
