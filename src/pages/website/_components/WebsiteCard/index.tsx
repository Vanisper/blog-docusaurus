import React, { memo } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";
import { Website } from "@site/src/types";
import { isNil } from "lodash-es";
import avatarGif from "@site/static/images/avatars/avatar-animated.gif";
import { pingHost } from "@site/src/utils";

const WebsiteCard = memo(({ website }: { website: Website }) => (
  <li
    key={website.name}
    className={clsx(styles.websiteCard, "padding-vert--sm padding-horiz--md")}
  >
    <img
      src={
        !isNil(website.logo)
          ? typeof website.logo === "string"
            ? website.logo
            : website.logo.default
          : avatarGif
      }
      alt={website.name}
      className={clsx(styles.websiteCardImage)}
    />
    <div className={styles.websiteCardBody}>
      <div className={clsx(styles.websiteCardHeader)}>
        <h4 className={styles.websiteCardTitle}>
          <Link href={website.href} className={styles.websiteCardLink}>
            {website.name}
          </Link>
        </h4>
      </div>
      <p
        className={styles.websiteCardDesc}
        data-for="website-desc-tip"
        data-tip={website.desc}
      >
        {website.desc}
      </p>
    </div>
  </li>
));

export default WebsiteCard;
