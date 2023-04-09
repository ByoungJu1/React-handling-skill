import {Fragment} from 'react';

function App() {
    const name = "리액트"
    return (
      <>
        {name === "리액트" && (
          <h1>{name} 안녕!</h1>
        )}        
      </>
    );
}
// &&연산자 사용 시 0은 falsy한 값이지만 예외적으로 화면에 출력된다!
// JSX로 괄호를 감싸는 것은 필수사항이 아니며 일반적으로 여러줄 사용 시 괄호로 감싼다.
// jsx 코드없이 undefined를 반환하면 에러가 발생한다! 
export default App;
