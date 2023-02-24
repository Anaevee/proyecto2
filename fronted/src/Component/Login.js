import React, { useContext, useState } from 'react';
import { post } from '../api/post';
import { Token } from '../App';

// export function UseForm(){
//   let {authenticated,setAuthenticated} =   useContext(Token)

//   if(!authenticated){
//     document.location = '/loginUser'
//     return <></>
//   }
// }

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [, setToken] = useContext(AuthTokenContext);

  const vaciarFormulario = () => {
    setEmail('');
    setPassword('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };

     const respuestaServidor = (body) => {
    //   setToken(body.token.split(' ')[1]);
    };
    post('http://localhost:5000/login', body, respuestaServidor);
    vaciarFormulario();
  };
  return (
      <div>
        <h1>Login</h1>


        <section>
          <form
            action='/users/login'
            method='post'
            id='login'
            onSubmit={onSubmit}
          >
            <input
              type='text'
              name='email'
              placeholder='Escribe aquí tu Email'
              id='email-login'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type='password'
              name='password'
              placeholder='Escribe aquí tu Password'
              id='password-login'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Enviar</button>
          </form>
        </section>
      </div>
  );
};
