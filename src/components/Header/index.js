import './styles.css';
import logoDark from '../../assets/logo-dark.svg';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    return(
        <div class="header">
            <div class="header-container">
                <div class="logo">
                    <img src={logoDark} alt="Logo escura"/>
                </div>
                <div class="nav-header">
                    <button
                        class={location.pathname.includes('home') ? 'nav-header color-link' : 'nav-header'}
                        onClick={() => {navigate('/home')}}
                    >HOME</button>
                    <button
                        class={location.pathname.includes('portifolio') ? 'nav-header color-link' : 'nav-header'}
                        onClick={() => {navigate('/portifolio')}}
                    >PORTFOLIO</button>
                    <button
                        class={location.pathname.includes('contact') ? 'nav-header color-link' : 'nav-header'}
                        onClick={() => {navigate('/contact')}}
                    >CONTATO</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
