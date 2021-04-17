import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Работаем с облаком",
    Svg: require("../../static/img/cloud.svg").default,
    description: (
      <>
        Все работает через FastReport Cloud — облачный построитель отчётов и
        генератор документов.
      </>
    ),
  },
  {
    title: "Используем Telegram",
    Svg: require("../../static/img/telegram.svg").default,
    description: (
      <>Что может быть лучше, чем интерфейс любимого многими мессенджера?</>
    ),
  },
  {
    title: "Круче всех на Node.js",
    Svg: require("../../static/img/code.svg").default,
    description: (
      <>Все на тайпскрипте и в докер контейнерах, а монга в качестве базы!</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
