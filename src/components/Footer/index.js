import './styles.css';
import logoLight from '../../assets/logo-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    return(
        <footer class="footer">
            <div class="footer-container">
                <div class="nav-footer">
                    <img class="nav-footer" src={logoLight} alt="Logo clara" />
                    <button class="nav-footer footer-btn" onClick={() => {navigate('/home')}}>HOME</button>
                    <button class="nav-footer footer-btn" onClick={() => {navigate('/portifolio')}}>PORTFOLIO</button>
                    <button class="nav-footer footer-btn" onClick={() => {navigate('/contact')}}>CONTATO</button>
                </div>
                <div class="social">
                    <button class="social" onClick={() => window.open('https://github.com/alluisi', '_blank')}>
                        <img src={githubLight} alt="GitHub" />
                    </button>
                    <button class="social" onClick={() => window.open('https://www.linkedin.com/in/alessandra-lamas-luisi-64b8b438/', '_blank')}>
                        <img src={linkedinLight} alt="LinkedIn" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
