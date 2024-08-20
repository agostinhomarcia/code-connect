import styles from "./aside.module.css";
import logo from "../../../public/logo.png";
import Image from "next/image";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image src={logo} alt="Logo da Code Connect" />
    </aside>
  );
};
