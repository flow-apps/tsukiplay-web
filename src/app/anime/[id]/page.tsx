import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { api } from "@/services/api";
import { TopAnimeItem } from "@/types/top";
import styles from "@/styles/anime.module.css";
import { Metadata } from "next";

interface IAnimeResponse {
  data: TopAnimeItem;
}

async function getAnimeData(id: string): Promise<TopAnimeItem> {
  const {
    data: { data },
  } = await api.get<IAnimeResponse>(`/anime/${id}/full`);
  return data;
}

type PageProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const data = await getAnimeData(id);

  const title = "Detalhes sobre " + (data.title_english || data.title);
  const description = data.synopsis;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: data.images.webp.large_image_url,
    },
  };
}

const AnimePage = async ({ params }: PageProps) => {
  const { id } = await params;
  const anime = await getAnimeData(id);

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.animeCard}>
          <img
            src={anime.images.webp.large_image_url}
            alt={anime.title_english || anime.title}
            className={styles.animeImage}
          />
          <h1 className={styles.animeTitle}>
            {anime.title_english || anime.title}
          </h1>
          <div className={styles.buttonContainer}>
            <a
              href={`tsukiplay://anime/${id}`}
              className={styles.appButton}
            >
              Abrir no TsukiPlay
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.flowapps.AnimeApp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.playstoreButton}
            >
              Baixar app na Play Store
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AnimePage;
