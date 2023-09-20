"use client";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PieChart from "../components/PieChart";
import SearchBar from "../components/SearchBar";
import SubscriptionPreviewCard from "../components/SubscriptionPreviewCard";
import styles from "./home.module.css";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ISubscription {
  name: string;
  price: number;
  startDate: Date;
  img: string;
}

const supabase = createClientComponentClient();

async function getSubscriptionsFromDB() {
  const { data: subscriptions, error } = await supabase
    .from("subscriptions")
    .select();

  return subscriptions;
}

export default function Home() {
  const [subscriptions, setSubscriptions] = useState<ISubscription[] | null>(
    []
  );

  useEffect(() => {
    getSubscriptions();
  }, []);

  async function getSubscriptions() {
    let { data: subscriptionsData, error } = await supabase
      .from("subscriptions")
      .select();
    let tmpSubscriptions: ISubscription[] = [];
    if (subscriptionsData != null) {
      subscriptionsData.forEach((element) => {
        tmpSubscriptions.push({
          name: element.name,
          price: element.price,
          img: element.img,
          startDate: element.startDate,
        });
      });
    }
    setSubscriptions(tmpSubscriptions);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.headerSection}>
          <h1>Välkommen Gabralda!</h1>
        </section>

        <SearchBar></SearchBar>

        <PieChart></PieChart>

        <section className={styles.totalCostSection}>
          <p>Totalkostnad/mån</p>
          <p>1200 KR</p>
        </section>

        <section className={styles.showInactiveSection}></section>

        <section className={styles.categorySection}>
          <h4>Kategorier</h4>
          <div className={styles.categoryThumbnailsBar}>
            <div className={`${styles.categoryThumbnail} ${styles.music}`}>
              <Image
                src="./images/home/note.svg"
                width={17}
                height={30}
                alt="music"
              />
            </div>
            <div className={`${styles.categoryThumbnail} ${styles.book}`}>
              <Image
                src="./images/home/book.svg"
                width={30}
                height={23.82}
                alt="book"
              />
            </div>
            <div className={`${styles.categoryThumbnail} ${styles.movie}`}>
              <Image
                src="./images/home/movie.svg"
                width={30}
                height={30}
                alt="movie"
              />
            </div>
            <div className={`${styles.categoryThumbnail} ${styles.webb}`}>
              <Image
                src="./images/home/webb.svg"
                width={30}
                height={27}
                alt="webb"
              />
            </div>
          </div>
        </section>

        <section className={styles.musicSection}>
          <section className={styles.previewTitleBar}>
            <h2>MUSIK</h2>
            <h2>367KR/MÅN</h2>
          </section>

          {subscriptions?.map((subscription) => (
            <SubscriptionPreviewCard
              alt="Spotify"
              name={subscription.name}
              height={55}
              width={55}
              price={subscription.price}
              src="./images/home/spotify.svg"
            ></SubscriptionPreviewCard>
          ))}
        </section>

        <section className={styles.booksAndMediaSection}>
          <section className={styles.previewTitleBar}>
            <h2>MUSIK</h2>
            <h2>367KR/MÅN</h2>
          </section>
        </section>
        <section className={styles.moviesAndTvSection}>
          <section className={styles.previewTitleBar}>
            <h2>MUSIK</h2>
            <h2>367KR/MÅN</h2>
          </section>
        </section>
        <section className={styles.otherSection}>
          <section className={styles.previewTitleBar}>
            <h2>MUSIK</h2>
            <h2>367KR/MÅN</h2>
          </section>
        </section>
      </div>
    </>
  );
}
