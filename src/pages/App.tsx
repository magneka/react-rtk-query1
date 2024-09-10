import React from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { useGetPokemonByNameQuery } from '../state/services/pokemon';
import { incrementByAmount } from '../state/slices/count';

export const App = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const bul = useGetPokemonByNameQuery('bulbasaur');

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(1))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(-1))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
