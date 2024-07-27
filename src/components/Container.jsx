import Card from "./Card";
import styles from "../modules/container.module.css";

export default function Container() {
  return (
    <div className={styles.container}>
      <Card
        title="Supervisor"
        description="Monitors activity to identify project roadblocks"
        imgName="supervisor"
        border="hsl(180, 62%, 55%)"
      />
      <div className={styles.midContainer}>
        <Card
          title="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
          imgName="team-builder"
          border="hsl(0, 78%, 62%)"
        />
        <Card
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
          imgName="karma"
          border="hsl(34, 97%, 64%)"
        />
      </div>
      <Card
        title="Calculator"
        description="Uses data from past projects to provide better delivery estimates"
        imgName="calculator"
        border="hsl(212, 86%, 64%)"
      />
    </div>
  );
}
