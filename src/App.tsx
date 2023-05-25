import Projetos from './containers/Projetos/projetos'
import Sidebar from './containers/Sidebar/sidebar'
import Sobre from './containers/Sobre/sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
