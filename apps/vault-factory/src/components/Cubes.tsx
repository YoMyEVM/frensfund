import React from "react";
import styles from "./Cubes.module.css"; 

const Cubes: React.FC = () => {
  return (
    <div className={styles.cubes}>
      {/* Row 1 */}
      <div className={styles.cube} data-cube="111">
        <div className={styles.cubeWrap}>
          <div className={styles.cubeTop}>
            <div className={styles.shadowZ} data-cube="112"></div>
          </div>
          <div className={styles.cubeBottom}></div>
          <div className={styles.cubeFrontLeft}></div>
          <div className={styles.cubeFrontRight}></div>
          <div className={styles.cubeBackLeft}></div>
          <div className={styles.cubeBackRight}></div>
        </div>
      </div>
      {/* Additional cubes follow the same structure... */}
      
      {/* Shadows */}
      <div className={styles.largeShadows}>
        <div className={styles.largeShadow} data-cube="113"></div>
        <div className={styles.largeShadow} data-cube="123"></div>
        <div className={styles.largeShadow} data-cube="133"></div>
        <div className={styles.largeShadow} data-cube="213"></div>
        <div className={styles.largeShadow} data-cube="223"></div>
        <div className={styles.largeShadow} data-cube="233"></div>
        <div className={styles.largeShadow} data-cube="313"></div>
        <div className={styles.largeShadow} data-cube="323"></div>
        <div className={styles.largeShadow} data-cube="333"></div>
      </div>
    </div>
  );
};

export default Cubes;
