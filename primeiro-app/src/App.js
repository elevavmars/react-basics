import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar JS'
  ]);

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
