import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

  const {counter, setCounter, increment, decrement, reset} = useCounter(10);

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <small>Vamos a incrementar/decrementar segun lo que le envies al increment/decrement</small>
      <hr />
      <br />
      <button className="btn btn-primary" onClick={ () => increment(2) }>+1</button>
      <button className="btn btn-primary" onClick={ reset }>Reset</button>
      <button className="btn btn-primary" onClick={ () => decrement(2) }>-1</button>
    </>
  )
}
