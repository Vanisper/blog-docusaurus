import {
  WorkCardItemType,
  WorksPageInfoType,
  Techbadge,
} from "@site/src/types";

export const worksInfo: WorksPageInfoType = {
  title: "开源作品集",
  description:
    "我是一名中年老码农,为生活而负重前行,为兴趣而坚守理想,专注于TS,React,Node全栈<br />同时拥有15年PHP开发经验并学习Golang中",
};
export const works: WorkCardItemType[] = [
  {
    img: require("./images/works/rowfish-thumbnail.png"),
    name: "Rowfish",
    desc: "基于Docusaurus v2 静态网站生成器实现个人知识管理与分享程序,包含文档,博客,个人及作品介绍和生态导航等功能",
    link: "/rowfish",
    demo: "https://pincman.com",
    source: "http://github.com/rowfishjs/rowfish",
    tags: ["docusarus", "typescript", "react", "theme"],
  },
  {
    img: require("./images/works/rowfish-pro-thumbnail.png"),
    name: "Rowfish Pro",
    desc: "基于Wordpress及Rizhuti-V2开发的一款用于在线网课及知识付费的主题,包含问答系统,会员体系,在线支付等功能",
    link: "/rowfish#关于Pro",
    demo: "https://jikexingkong.com",
    buy: "http://wpa.qq.com/msgrd?v=3&uin=1849600177&site=qq&menu=yes",
    tags: ["docusarus", "typescript", "react", "theme"],
  },
  {
    img: require("./images/works/talejs-thumbnail.png"),
    name: "Talejs",
    desc: "一个使用EsBuild或SWC直接运行Node+TS的库,并结合Nodemon可在开发环境极速热重载",
    link: "https://github.com/talejs/talejs",
    source: "https://github.com/talejs/talejs",
    tags: ["typescript", "nodejs", "nestjs"],
  },
  {
    img: require("./images/works/toome-thumbnail.png"),
    name: "荼蘼(toome)",
    desc: "vite+react18+typescript实现的后台管理系统,目前正在从react17升级到18中,将于2022年底发布新版本",
    link: "https://v.pincman.com/courses/66.html",
    target: "_blank",
    source: "https://github.com/toomejs/toome",
    tags: ["typescript", "react", "dashbord"],
  },
];

export const badges: Techbadge[] = [
  {
    label: "Javascript",
    logo: "javascript",
  },
  {
    label: "Typescript",
    logo: "typescript",
  },
  {
    label: "Node.js",
    logo: "node.js",
  },
  {
    label: "PHP",
    logo: "php",
  },
  {
    label: "Go",
    logo: "go",
  },
  {
    label: "React",
    logo: "react",
  },
  {
    label: "NestJS",
    logo: "nestjs",
  },
  {
    label: "Laravel",
    logo: "laravel",
  },
  {
    label: "Electron",
    logo: "electron",
  },
  {
    label: "小程序",
    logo: "wechat",
  },
  {
    label: "Linux",
    logo: "linux",
  },
  {
    label: "Docker",
    logo: "docker",
  },
  {
    label: "Mysql",
    logo: "mysql",
  },
  {
    label: "MongoDB",
    logo: "mongodb",
  },
  {
    label: "Redis",
    logo: "redis",
  },
  {
    label: "RabbitMQ",
    logo: "RabbitMQ",
  },
];
