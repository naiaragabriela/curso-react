
const UserDetails = ({name, age, profession}) => {
    return (
      <div>
          <h2>Detalhes do Usuário</h2>
          <ul>
              <li>Nome: {name}</li>
              <li>Idade: {age}</li>
              <li>Profissão: {profession}</li>
          </ul>
          {age >=18 ? (
            <p>Usuário pode tirar carteira de habilitação</p>
            ) : (
            <p>Usuário menor de idade</p>
            )}
      </div>
    )
  }
  
  export default UserDetails