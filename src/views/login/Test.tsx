import React from "react";
import { observer } from 'mobx-react-lite';
import CounterStore from '../../store/counter';
import { useStore } from "../../store";

function Test() {
  const { count, doubledCount, increment, decrement } = CounterStore;
  const { userStore } = useStore();
  console.log('Test component rendered');
  return (
    <>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={() => increment()}>Increment</button>
      <br />
      <br />
      <button onClick={() => decrement()}>Decrement</button>
      <p>---------用户:{userStore.name}</p>
    </>
  )
}

export default observer(Test);
// export default Test;

