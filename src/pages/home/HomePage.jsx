import styles from "./homepage.module.css";
export default function HomePage() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p style={{color:"red",fontSize:"20px"}}>
        welcome to react!!!
      </p>
    </div>
  );
}
