import styles from './About.module.css';
import{ Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={styles.about}>
            <h2>Sobre o Mini <span>Blog</span></h2>
            <p>Este projeto consiste em um blog simples desenvolvido com React no front-end e Firebase no back-end. O Mini Blog permite que os usuários criem, editem e excluam postagens. O objetivo deste projeto é demonstrar habilidades em desenvolvimento web, incluindo o uso de bibliotecas populares como React Router para navegação e Firebase para autenticação e armazenamento de dados.</p>
            <Link to="/posts/create" className='btn'>Criar Post</Link>
        </div>
    )
};

export default About;