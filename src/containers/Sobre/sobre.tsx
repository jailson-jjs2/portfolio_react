import Titulo from '../../components/Titulo/titulo'
import Paragrafo from '../../components/Paragrafo/paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Experiência profissional na área de tecnologia, com expertise em suporte |
      hardware, com conhecimento em desenvolvimento de sistemas, tendo como
      fortes habilidades o trabalho em equipe e resolução de problemas.
      Atualmente estou em transição de carreira para a área de desenvolvimento
      web. Domínio de layouts de Front-end e Back-end, frameworks, HTML5, CSS,
      Javascript, React, SASS, LESS, Gulp, Parcel, Grunt Dom, OO_JS, ES6, VueJS,
      Ajax, jQuery, Bootstrap, Java, SQL, Microsserviços com inicialização Java,
      Maven e Spring Big Data. Desenvolvimento de projetos web, automação e
      APIs.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Jailson-jjs2&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jailson-jjs2&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
