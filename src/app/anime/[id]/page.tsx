"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { api } from "@/services/api";
import { Anime, AnimeSearchResponse } from "@/types/anime";
import { TopAnimeItem, TopResponse } from "@/types/top";
import Head from "next/head";
import { useParams } from "next/navigation";
import styles from "@/styles/anime.module.css";
import React, { useEffect, useState } from "react";

interface IAnimeResponse {
  data: TopAnimeItem;
}

const AnimePage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [anime, setAnime] = useState<TopAnimeItem>();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (!id) return;

      console.log(id);

      const {
        data: { data },
      } = await api.get<IAnimeResponse>(`/anime/${id}/full`);

      setAnime(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Detalhes sobre {anime?.title_english || anime?.title}</title>
        <meta property="og:title" content={anime?.title_english || anime?.title} />
        <meta
          property="og:description"
          content={anime?.synopsis}
        />
        <meta property="og:image" content={anime?.images.webp.large_image_url}/>
      </Head>
      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.animeCard}>
          <img
            src={anime?.images.webp.large_image_url}
            alt={anime?.title_english || anime?.title}
            className={styles.animeImage}
          />
          <h1 className={styles.animeTitle}>
            {anime?.title_english || anime?.title}
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
