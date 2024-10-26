import { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');   // valor inicial
  const [email, setEmail] = useState('');   // valor inicial
  const [idade, setIdade] = useState('');   // valor inicial

  const [user, setUser] = useState({});   // retorna um bagui vazio

  function handleRegister(e) {
    e.preventDefault();   // impede que renderize infinitamente


    alert('Usuário registrado com sucesso')
    setUser({    //recebe e agrupa os valores do formulario
      nome: nome,
      idade: idade,
      email: email,
    })
  }

  return (

    <div>
      <h1>Cadastrando usuário</h1>

      <form onSubmit={handleRegister}> 

        <label>Nome:</label><br />
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)} />
        <br />


        <label>Email:</label><br />
        <input placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <br />


        <label>Idade:</label><br />
        <input placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)} />
        <br />

        <button type="submit">Registrar</button>

      </form> 

      <br /><br />

      <div>

        <span>Bem vindo: {user.nome}</span><br />   
        <span>Idade: {user.idade}</span><br />    
        <span>Email: {user.email}</span><br />    

      </div>

    </div>

  );

}

export default App;
