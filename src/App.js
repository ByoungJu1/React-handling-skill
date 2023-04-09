import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom}>맨밑으로</button>
      </div>
    );
  }
}
// onClick={this.ScrollBox.scrollToBottom} 과 같이 작성하면
// 처음 렌더링할때 this.scrollBox값이 undefined이므로 오류가 발생한다.
// 따라서 arrow function 으로 새로운 함수로 작성하면 버튼을 누를때(이미렌더링된후)에 this.scrollbox값을
// 읽어와서 실행하므로 오류가 발생하지 않는다.
export default App;
