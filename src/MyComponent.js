import React from 'react';
import { PropTypes } from 'prop-types';
// ES6 arrow function
// 용도가 다르기 때문에 기존 function 키워드를 대체할 순 없다.
// 서로 가리키고 있는 this 값이 다름
// 일반 함수는 자신이 종속된 객체를 this로 가리키고, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.
// arrow function은 일반적으로 함수를 파라미터로 전달할때 유용하며 연산 값을 바로 반환할 때 가독성을 높일수잇다.
const MyComponent = ({ name, favoriteNumber, children }) => {
  //비구조화 할당 ===  구조분해 할당
  //   const { name, children } = props;

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
};

// 값이 없을 경우 defaultProps setting
MyComponent.defaultProps = {
  name: '기본이름',
};

MyComponent.propTypes = {
  name: PropTypes.string, //name 은 무조건 string으로 전달해야 된다.
  favoriteNumber: PropTypes.number.isRequired, //favoriteNumber는 무조건 전달되어야 하며 type은 number 여야한다.
};

// 다양한 PropTypes 종류
// • array: 배열
// • arrayOf(다른 PropType): 특정 PropType으로 이루어진 배열을 의미합니다. 예를 들어 arrayOf(PropTypes.number)는 숫자로 이루어진 배열입니다.
// • bool: true 혹은 false 값
// • func: 함수
// • number: 숫자
// • object: 객체
// • string: 문자열
// • symbol: ES6의 Symbol
// • node: 렌더링할 수 있는 모든 것(숫자, 문자열, 혹은 JSX 코드. children도 node PropType입니다.)
// • instanceOf(클래스): 특정 클래스의 인스턴스(예: instanceOf(MyClass))
// • oneOf(['dog', 'cat']): 주어진 배열 요소 중 값 하나
// • oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안의 종류 중 하나
// • objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
// • shape({ name: PropTypes.string, num: PropTypes.number }): 주어진 스키마를 가진 객체
// • any: 아무 종류

export default MyComponent;
