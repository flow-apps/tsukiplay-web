import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          TsukiPlay: Sua jornada pelo universo dos animes começa aqui.
        </h1>
        <p className={styles.subtitle}>
          Todas as notícias, informações e as melhores recomendações do mundo
          dos animes na palma da sua mão. Baixe o TsukiPlay agora e comece sua
          jornada otaku!
        </p>
        <a href="#" className={styles.download_button}>
          <img src={"/playstore-download.png"} />
        </a>
      </div>
      <img
        className={styles.mockup_image}
        src={"/mockups/1.png"}
        alt="Imagem APP"
      />
    </main>
  );
}
