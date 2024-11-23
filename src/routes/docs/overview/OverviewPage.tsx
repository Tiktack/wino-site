import { Title } from "@solidjs/meta";
import styles from "./OverviewPage.module.css";

export const OverviewPage = () => {
  return (
    <main>
      <Title>Wino Mail | Docs | Overview</Title>

      <h1 class={styles.text}>Overview</h1>

      <p class={styles.text}>
        Wino Mail is an alternative email client designed specifically for Windows users. It aims to enhance email management with a modern interface and intuitive features, offering a streamlined experience compared to default email solutions. The tool is geared towards those seeking a user-friendly and efficient platform for handling their email communications.
      </p>
    </main>
  );
}