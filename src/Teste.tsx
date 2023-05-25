import styled from 'styled-components'

/* CRIANDO PRIPRIEDADE PARA COR E FONTE, ? P/ SER OPCIONAL */
type BotaoProps = {
  principal: boolean
  fontSize?: string
}
/* DEFININDO A COR P/ BOTÃO PRINCIPAL E FONTE*/
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

/* CHAMANDO O BOTAO COM PROPS V E F E O TAMANHO DA FONTE*/
function Teste() {
  return (
    <>
      <Botao fontSize="20px" principal>
        Enviar
      </Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigo as="a" principal>
        <span>Exluir</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
