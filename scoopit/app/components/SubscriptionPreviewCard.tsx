import Image from "next/image";
import styles from "./SubscriptionPreviewCard.module.css";

export default function SubscriptionPreviewCard() {
  return (
    <>
      <div className={styles.previewCardContainer}>
        <div className={styles.leftSide}>
          <Image
            src="./images/home/spotify.svg"
            width={56}
            height={56}
            alt="spotify"
          />
          <div className={styles.infoTextPart}>
            <h2>Spotify</h2>
            <p>Pris</p>
          </div>
        </div>

        <div className={styles.rightSide}>
          <p>119kr/mån</p>
        </div>
      </div>
    </>
  );
}
