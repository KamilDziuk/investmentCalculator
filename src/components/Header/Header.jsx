import styles from "./Header.module.css";
export default function Header() {
  return (
    <header id={styles.header}>
      <img src="investment_calculator_logo.webp" alt="" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
