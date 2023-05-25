import Paragrafo from '../Paragrafo/paragrafo'
import { Titulo } from '../Titulo/styles'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario"> Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualisar</LinkBotao>
  </Card>
)

export default Projeto
