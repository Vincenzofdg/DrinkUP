import React, {useEffect, useState} from 'react';
import Context from './Context';

function MyProvider({children}) {
  const [glasses, setGlasses] = useState(0);
  const [reset, setReset] = useState(false);
  const [rule, setRule] = useState({times: 8, total: 2});

  const obj = {
    glasses,
    setGlasses,
    reset,
    setReset,
    rule,
    setRule,
  };

  useEffect(() => console.log('App - DrinkUp - Just Drink it'), []);

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;
