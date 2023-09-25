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
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EventEmitter } from "stream";
import { elements } from "chart.js";
import { ISubscription } from "../components/SubscriptionPreviewCard";

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

export default function Home() {
  const [allSubscriptions, setAllSubscriptions] = useState<
    ISubscription[] | null
  >([]);
  let [totalPrice, setTotalPrice] = useState<number | null>(0);

  let [pieData, setPieData] = useState<number[]>([0]);
  const [totalCategoryCosts, setTotalCategoryCosts] = useState<number[]>([]);

  function onClickCategoryThumbnail(e: MouseEvent) {
    if (allSubscriptions === null) return;

    const categorySectionIds = new Map<string, number>([
      ["music", 1],
      ["book", 2],
      ["movie", 3],
      ["webb", 4],
    ]);

    const categoryThumbnailId = (e.target as Element).id;

    const tmpAllsubscription = [...allSubscriptions];
    tmpAllsubscription
      .filter(
        (sub) => sub.category !== categorySectionIds.get(categoryThumbnailId)
      )
      .forEach((sub) => {
        sub.hidden = true;
      });

    setAllSubscriptions(tmpAllsubscription);
  }

  useEffect(() => {
    getSubscriptions(SubscriptionCategory.all);
  }, []);

  useEffect(() => {
    calcTotalPrice();
    calcPieData();
  }, [allSubscriptions]);

  function calcTotalPrice() {
    if (allSubscriptions !== null) {
      setTotalPrice(
        allSubscriptions.reduce((accumulator, currentObject) => {
          return accumulator + currentObject.price;
        }, 0)
      );
    }
  }

  function calcPieData() {
    setPieData([0]);
    setTotalCategoryCosts([]);
    const tmpTotalCategoryCost = [];

    let tmpSubscriptions;
    let totalSubCost: number | undefined = 0;
    let tmpPieData: number[] = [];

    for (let i = 1; i < 5; i++) {
      tmpSubscriptions = allSubscriptions?.filter((sub) => sub.category === i);

      totalSubCost = tmpSubscriptions?.reduce((accumulator, currentObject) => {
        return accumulator + currentObject.price;
      }, 0);

      tmpPieData.push(totalSubCost ?? 0);

      tmpTotalCategoryCost.push(totalSubCost ?? 0);
      setTotalCategoryCosts(tmpTotalCategoryCost);
    }

    setPieData(tmpPieData);
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
        const tmpSubscription: ISubscription = {
          name: element.name,
          price: element.price,
          img: element.img,
          startDate: element.startDate,
          alt: element.name,
          width: 55,
          height: 55,
          category: element.category,
          hidden: false,
        };

        tmpSubscriptions.push(tmpSubscription);
      });
    }

    switch (category) {
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

        <PieChart data={pieData}></PieChart>

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
              <h2>{totalCategoryCosts[0]}KR/MÅN</h2>
            </section>
            {allSubscriptions
              ?.filter((sub) => sub.category === 1)
              .map((subscription) => (
                <SubscriptionPreviewCard
                  prop={subscription}
                ></SubscriptionPreviewCard>
              ))}
          </section>

          <section
            className={styles.booksAndMediaSection}
            id="booksAndMediaSection"
          >
            <section className={styles.previewTitleBar}>
              <h2>BÖCKER OCH MEDIA</h2>
              <h2>{totalCategoryCosts[1]}KR/MÅN</h2>
            </section>

            {allSubscriptions
              ?.filter((sub) => sub.category === 2)
              .map((subscription) => (
                <SubscriptionPreviewCard
                  prop={subscription}
                ></SubscriptionPreviewCard>
              ))}
          </section>

          <section
            className={styles.moviesAndTvSection}
            id="moviesAndTvSection"
          >
            <section className={styles.previewTitleBar}>
              <h2>FILMER OCH SERIER</h2>
              <h2>{totalCategoryCosts[2]}KR/MÅN</h2>
            </section>

            <section>
              {allSubscriptions
                ?.filter((sub) => sub.category === 3)
                .map((subscription) => (
                  <SubscriptionPreviewCard
                    prop={subscription}
                  ></SubscriptionPreviewCard>
                ))}
            </section>
          </section>

          <section className={styles.otherSection} id="otherSection">
            <section className={styles.previewTitleBar}>
              <h2>ÖVRIGT OCH WEBB</h2>
              <h2>{totalCategoryCosts[3]}KR/MÅN</h2>
            </section>
            <section>
              {allSubscriptions
                ?.filter((sub) => sub.category === 4)
                .map((subscription) => (
                  <SubscriptionPreviewCard
                    prop={subscription}
                  ></SubscriptionPreviewCard>
                ))}
            </section>
          </section>
        </section>
      </div>
    </>
  );
}
