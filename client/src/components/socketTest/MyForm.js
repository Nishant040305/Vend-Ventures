import React, { useState } from 'react';
import { socket } from '../../socket';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var msg = {
      channel: "66179fa252a9718168bb30ec",
      user: "test",
      message: { type: "text", content: value }
    }
    socket.timeout(5000).emit('message', msg, () => {
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={ onSubmit }>
      <input onChange={ e => setValue(e.target.value) } />

      <button type="submit" disabled={ isLoading }>Submit</button>
    </form>
  );
}