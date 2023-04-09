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
            this.setState({ number: number + 1 }, () => {
              console.log('방금 setState가 호출되었습니다.');
              console.log(this.state);
            });

            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
