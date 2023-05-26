import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto/projeto'
import Titulo from '../../components/Titulo/titulo'

import { Lista } from './styles'

const Projetos = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/jailson-jjs2/repos')
      .then((resposta) => resposta.json())
      .then((respostaJson) => {
        setRepos(respostaJson)
      })
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repos.map(({ id, name, language, html_url }) => (
          <li key={id}>
            <Projeto name={name} language={language} html_url={html_url} />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
