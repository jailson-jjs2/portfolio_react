import Titulo from '../../components/Titulo/titulo'

const Sidebar = () => (
  <aside>
    <img src="https://github.com/jailson-jjs2.png" alt="" />
    {/* POR TRATAR <Titulo> ESSA tag COMO children  Ñ COMO PROPRIEDADE COM QUALQUER OUTRO NOME, EX: ABAIXO "valor" */}
    {/* <Titulo valor="Jailson Joventino"></Titulo> */}
    <Titulo fontSize={14}>Jailson Joventino</Titulo>
  </aside>
)

export default Sidebar
