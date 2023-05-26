import { type } from 'os'
import Avatar from '../../components/Avatar/avatar'
import Paragrafo from '../../components/Paragrafo/paragrafo'
import Titulo from '../../components/Titulo/titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    {/* POR TRATAR <Titulo> ESSA tag COMO children  Ñ COMO PROPRIEDADE COM QUALQUER OUTRO NOME, EX: ABAIXO "valor" */}
    {/* <Titulo valor="Jailson Joventino"></Titulo> */}
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={14}>Jailson Joventino</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        jailson-jjs2
      </Paragrafo>
      <Paragrafo tipo="secundario" fontSize={14}>
        dev.ti.2023@gmail.com
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        DEV Full Stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Tema Light/Dark</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
