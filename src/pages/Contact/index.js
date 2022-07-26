import './styles.css';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Contact() {
    return(
        <div className='body'>
            <Header />
            <div class="entre-em-contato">
                <div class="texto">
                    <div class="titulo">
                        <h3 class="titulo">Entre em contato</h3>
                    </div>
                    <div class="informacoes">
                        <p>
                            Eu adoraria escutar sobre seu trabalho atual e como eu poderia ajudar. Atualmente sou 
                            desenvolvedor full-stack junior, mas tenho maior atração por front-end. Estou sempre 
                            aberta a novas oportunidades e desafios. Sou uma pessoa trabalhadora e positiva que 
                            sempre fará as tasks com um senso de propósito e atenção aos detalhes. Fique livre para
                            checar meus perfis abaixo e entrar em contato.
                        </p>
                        <div class="informacoes__imagens">
                            <button class="informacoes__imagens-btn" onClick={() => window.open('https://github.com/alluisi', '_blank')}>
                                <img src={githubDark} alt="GitHub" />
                            </button>
                            <button class="informacoes__imagens-btn" onClick={() => window.open('https://www.linkedin.com/in/alessandra-lamas-luisi-64b8b438/', '_blank')}>
                                <img src={linkedinDark} alt="LinkedIn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pagina-contato">
                <div class="formulario">
                    <div class="titulo">
                        <h3>Contato</h3>
                    </div>
                    <div class="inputs">
                        <span class="aviso">Envio de mensagem indisponível no momento.</span>
                        <label class="label" for="nome">Nome</label>
                        <input class="input-menor" id="nome" type="text" />
                        <label class="label" for="e-mail">E-mail</label>
                        <input class="input-menor" id="email" type="text" />
                        <label class="label" for="mensagem">Mensagem</label>
                        <input class="input-maior" id="mensagem" type="text" />
                        <button class="input-btn">ENVIAR</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;