import Image from "next/image";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <>
      <div className={styles.container}>
        <input type="text" className={styles.searchBar}></input>
        <Image
          className={styles.searchIcon}
          src={"./images/components/search_bar/search_icon.svg"}
          alt="search icon"
          width={22}
          height={22}
        ></Image>
      </div>
    </>
  );
}
