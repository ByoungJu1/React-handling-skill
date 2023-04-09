import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: color }}>{message}</h1>

      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};
// state를 사용 시 값을 직적변경하면 안되고 setState 혹은 useState훅의 setter함수를 사용해아한다.
// 배열이나 객체는 사본을 만들고 값을 업데이트 후 위 방법으로 업데이트한다.
const object = { a: 1, b: 2, c: 3 };
const newObject = { ...object, b: 2 };
// setObject(newObject)

const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: true },
];
let newArray = array.concat({ idx: 4 }); // 새항목추가
const filterArray = newArray.filter((item) => item.id !== 2); //id가 2인 항목제거
const mapArray = newArray.map((item) =>
  item.id === 1 ? { ...item, value: false } : item
); // id가 1인항목 value:false 설정
console.log(filterArray);
console.log(mapArray);

export default Say;
