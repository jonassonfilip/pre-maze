import Image from "next/image";
import styles from "./SubscriptionPreviewCard.module.css";

interface SubscriptionPreviewCardProp {
  src: string;
  name: string;
  width: number;
  height: number;
  alt: string;
  price: number;
}

export default function SubscriptionPreviewCard(
  prop: SubscriptionPreviewCardProp
) {
  return (
    <>
      <div className={styles.previewCardContainer}>
        <div className={styles.leftSide}>
          <Image
            src={prop.src}
            width={prop.width}
            height={prop.height}
            alt={prop.alt}
          />
          <div className={styles.infoTextPart}>
            <h2>{prop.name}</h2>
            <p>Pris</p>
          </div>
        </div>

        <div className={styles.rightSide}>
          <p>{prop.price}kr/mån</p>
        </div>
      </div>
    </>
  );
}
