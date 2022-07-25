import './styles.css';
import { useNavigate } from 'react-router-dom';

function CardContacts() {
    const navigate = useNavigate();

    return(
        <div class="contato">
            <div class="contato-container">
                <span class="h-contato">Interessado(a) em fazer projetos comigo?</span>
                <button class="btn-contato" onClick={() => {navigate('/contact')}}>CONTATO</button>
            </div>
        </div>
    )
}

export default CardContacts;