import styles from "./Banner.module.css";

type BannerProps = {
  title: string;
  backgroundImageUrl?: string;
  backgroundColor?: string;
};

const Banner = ({
  title,
  backgroundImageUrl,
  backgroundColor = "#000",
}: BannerProps) => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : undefined,
        backgroundColor: backgroundImageUrl ? undefined : backgroundColor,
      }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
