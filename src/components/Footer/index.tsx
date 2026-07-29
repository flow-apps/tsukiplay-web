import Link from 'next/link';
import styles from './styles.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Tsukiplay. Todos os direitos reservados.</p>
      <p>
        <Link href="/privacy">Política de Privacidade</Link>
      </p>
    </footer>
  );
};

export default Footer;
