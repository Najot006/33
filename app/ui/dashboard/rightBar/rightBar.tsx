import React from "react";
import styles from "./rightBar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
export default function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/aslbe.JPG" alt="d" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Availabe Now</span>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 minute to learn</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            expedita exercitationem reiciendis aut at?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
            sequi?
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            dolorem aliquam, nisi molestias ullam tempore. Explicabo.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}
