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
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { EventEmitter } from "stream";
import { elements } from "chart.js";

interface ISubscription {
  name: string;
  price: number;
  startDate: Date;
  img: string;
}
enum SubscriptionCategory {
  music = 1,
  booksAndMedia = 2,
  moviesAndTv = 3,
  other = 4,
  all = 5,
}

const supabase = createClientComponentClient();

/*async function getSubscriptionsFromDB() {
  const { data: subscriptions, error } = await supabase
    .from("subscriptions")
    .select()
    .eq("category", 1);

  return subscriptions;
}*/

function sumAllSubscriptions() {}

function onClickCategoryThumbnail(e: MouseEvent) {
  const allCategoryThumbnailSections = document.querySelectorAll(
    "#categoryThumbnailSection > section"
  );

  allCategoryThumbnailSections.forEach((element) => {
    element.classList.remove(styles.hide);
  });

  const categorySectionIds = new Map<string, string>([
    ["music", "musicSection"],
    ["book", "booksAndMediaSection"],
    ["movie", "moviesAndTvSection"],
    ["webb", "otherSection"],
  ]);

  const element = e.target as Element;

  console.log(element.id as string);

  const otherSections = document.querySelectorAll(
    (("#categoryThumbnailSection > section:not(#" +
      categorySectionIds.get(element.id)) as string) + ")"
  );
  otherSections.forEach((element) => {
    element.classList.add(styles.hide);
  });
}

export default function Home() {
  const [musicSubscriptions, setMusicSubscriptions] = useState<
    ISubscription[] | null
  >([]);
  const [movieAndTvSubscriptions, setMovieAndTvSubscriptions] = useState<
    ISubscription[] | null
  >([]);
  const [booksAndMediaSubscriptions, setBooksAndMediaSubscriptions] = useState<
    ISubscription[] | null
  >([]);
  const [webbAndOtherSubscriptions, setWebbAndOtherSubscriptions] = useState<
    ISubscription[] | null
  >([]);
  const [allSubscriptions, setAllSubscriptions] = useState<
    ISubscription[] | null
  >([]);
  let [totalPrice, setTotalPrice] = useState<number | null>(0);

  useEffect(() => {
    getSubscriptions(SubscriptionCategory.music);
    getSubscriptions(SubscriptionCategory.booksAndMedia);
    getSubscriptions(SubscriptionCategory.moviesAndTv);
    getSubscriptions(SubscriptionCategory.other);
    getSubscriptions(SubscriptionCategory.all);
  }, []);

  useEffect(() => {
    calcTotalPrice();
  }, [allSubscriptions]);

  function calcTotalPrice() {
    console.log(allSubscriptions);
    if (allSubscriptions !== null) {
      setTotalPrice(
        allSubscriptions.reduce((accumulator, currentObject) => {
          return accumulator + currentObject.price;
        }, 0)
      );
    }
  }

  

  async function getSubscriptions(category: SubscriptionCategory) {
    let subscriptionsData;
    if (category !== SubscriptionCategory.all) {
      subscriptionsData = (
        await supabase
          .from("subscriptions")
          .select()
          .eq("category", category as number)
      ).data;
    } else {
      subscriptionsData = (await supabase.from("subscriptions").select()).data;
    }

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

    switch (category) {
      case SubscriptionCategory.music:
        setMusicSubscriptions(tmpSubscriptions);
        break;
      case SubscriptionCategory.booksAndMedia:
        setBooksAndMediaSubscriptions(tmpSubscriptions);
        break;
      case SubscriptionCategory.moviesAndTv:
        setMovieAndTvSubscriptions(tmpSubscriptions);
        break;

      case SubscriptionCategory.other:
        setWebbAndOtherSubscriptions(tmpSubscriptions);
        break;

      case SubscriptionCategory.all:
        setAllSubscriptions(tmpSubscriptions);
        break;

      default:
        break;
    }
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
          <p>{totalPrice} KR</p>
        </section>

        <section className={styles.showInactiveSection}></section>

        <section className={styles.categorySection}>
          <h4>Kategorier</h4>
          <div className={styles.categoryThumbnailsBar}>
            <div className={`${styles.categoryThumbnail} ${styles.music}`}>
              <div
                className={styles.overlay}
                onClick={onClickCategoryThumbnail}
                id="music"
              ></div>
              <Image
                src="./images/home/note.svg"
                width={17}
                height={30}
                alt="music"
              />
            </div>
            <div className={`${styles.categoryThumbnail} ${styles.book}`}>
              <div
                className={styles.overlay}
                onClick={onClickCategoryThumbnail}
                id="book"
              ></div>
              <Image
                src="./images/home/book.svg"
                width={30}
                height={23.82}
                alt="book"
              />
            </div>
            <div className={`${styles.categoryThumbnail} ${styles.movie}`}>
              <div
                className={styles.overlay}
                onClick={onClickCategoryThumbnail}
                id="movie"
              ></div>
              <Image
                src="./images/home/movie.svg"
                width={30}
                height={30}
                alt="movie"
              />
            </div>
            <div className={`${styles.categoryThumbnail} ${styles.webb}`}>
              <div
                className={styles.overlay}
                onClick={onClickCategoryThumbnail}
                id="webb"
              ></div>

              <Image
                src="./images/home/webb.svg"
                width={30}
                height={27}
                alt="webb"
              />
            </div>
          </div>
        </section>

        <section id="categoryThumbnailSection">
          <section className={styles.musicSection} id="musicSection">
            <section className={styles.previewTitleBar}>
              <h2>MUSIK</h2>
              <h2>367KR/MÅN</h2>
            </section>
            {musicSubscriptions?.map((subscription) => (
              <SubscriptionPreviewCard
                alt="Spotify"
                name={subscription.name}
                height={55}
                width={55}
                price={subscription.price}
                src={subscription.img}
              ></SubscriptionPreviewCard>
            ))}
          </section>

          <section
            className={styles.booksAndMediaSection}
            id="booksAndMediaSection"
          >
            <section className={styles.previewTitleBar}>
              <h2>BÖCKER OCH MEDIA</h2>
              <h2>367KR/MÅN</h2>
            </section>
            {movieAndTvSubscriptions?.map((subscription) => (
              <SubscriptionPreviewCard
                alt="Spotify"
                name={subscription.name}
                height={55}
                width={55}
                price={subscription.price}
                src={subscription.img}
              ></SubscriptionPreviewCard>
            ))}
          </section>
          <section
            className={styles.moviesAndTvSection}
            id="moviesAndTvSection"
          >
            <section className={styles.previewTitleBar}>
              <h2>FILMER OCH SERIER</h2>
              <h2>367KR/MÅN</h2>
            </section>
          </section>
          <section className={styles.otherSection} id="otherSection">
            <section className={styles.previewTitleBar}>
              <h2>WEBB OCH ÖVRIGT</h2>
              <h2>367KR/MÅN</h2>
            </section>
          </section>
        </section>
      </div>
    </>
  );
}
