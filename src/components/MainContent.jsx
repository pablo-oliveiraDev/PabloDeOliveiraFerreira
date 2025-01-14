import styles from "../styles/components/maincontent.module.sass";
import Link from "next/link";
import { useRouter } from "next/router";
import { BtnApp } from "@/data/mainContent";

const mainContent = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <main id={styles.mainContent}>
      {BtnApp.map((item, index) => (
        <Link
          className={asPath === item.url ? styles.active : ""}
          href={item.url}
          key={index}
        >
          <button className={asPath === item.url ? styles.active : styles.btn}>
            {item.icon}
            <span>{item.name}</span>
          </button>
        </Link>
      ))}

      {children}
    </main>
  );
};

export default mainContent;
