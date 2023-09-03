/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-key */
import styles from "./breadcrum.module.scss";

export default function Breadcrumbs({ paths }) {
  return (
    <div className={styles.breadcrumb}>
      <ul>
        {paths.map((path, i) => {
          if (i == paths.length - 1) {
            return (
              <li style={{ marginLeft: "4px" }}>
                <span>{path}</span>
              </li>
            );
          } else {
            return (
              <>
                <li style={{ marginLeft: "40px" }}>
                  <a href="/" style={{ fontWeight: 600 }}>
                    <span>home</span>
                  </a>
                  <span style={{ fontWeight: 600 }}>/</span>
                </li>
                <li>
                  <a href="/blogs" style={{ fontWeight: 600 }}>
                    <span>{path}</span>
                  </a>{" "}
                  <span style={{ fontWeight: 600 }}>/</span>
                </li>
              </>
            );
          }
        })}
      </ul>
    </div>
  );
}
