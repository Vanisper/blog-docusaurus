import { Sandpack } from "@codesandbox/sandpack-react";
import React from "react";
import {
  PageMetadata,
  useColorMode,
  createStorageSlot,
} from "@docusaurus/theme-common";
import Layout from "@theme/Layout";

// function MySandPack() {
//   return <Sandpack></Sandpack>;
// }
export default function LiveCode() {
  const title = "在线代码";
  const description = "基于 Sandpack 的在线代码编辑器";

  return (
    <>
      <PageMetadata title={title} description={description} />
      <Layout noFooter>未开放</Layout>
    </>
  );
}
