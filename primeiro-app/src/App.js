import { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    return tarefasStorage ? JSON.parse(tarefasStorage) : [
      'Pagar a conta de luz',
      'Estudar React JS'
    ];
  });


  // Quando um componente é montado na tela o useEffect é chamado
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, []); // Caso tenha algo nessa array então sempre q oq tiver na arry sofrer alteração o useEffect será chamado

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]); // setItem cria um item no locaStorage chamado @tarefa e transforma em string

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (

    <div>
      <h1>Cadastrando usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <br />

        <button type="submit">Registrar</button>

      </form>

      <br /><br />

      <div>
        {tarefas.map(tarefa => (

          <li key={tarefa}>{tarefa}</li>

        ))}
      </div>

    </div>

  );

}

export default App;
