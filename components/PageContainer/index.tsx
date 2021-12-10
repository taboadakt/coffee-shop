import styles from "../../styles/Home.module.css";

const PageContainer = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default PageContainer;
