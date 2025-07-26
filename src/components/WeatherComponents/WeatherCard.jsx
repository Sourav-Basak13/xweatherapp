import styles from "./Weather.module.css";

const WeatherCard = ({ title, data }) => {
  return (
    <div className={styles["weather-card"]}>
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
};

export default WeatherCard;
