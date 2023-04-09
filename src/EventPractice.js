import React, { useState } from 'react';

const EventPractice = () => {
  //   const [username, setUsername] = useState('');
  //   const [message, setMessage] = useState('');

  //   const onChangeUsername = (e) => setUsername(e.target.value);
  //   const onChangeMessage = (e) => setMessage(e.target.value);
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const handleClick = (e) => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="아무거나 입력해 보세요"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};
// 함수가 호출될때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어짐을 방지하기 위해 bind 메서드로 this pointer를 바인딩한다.
export default EventPractice;
