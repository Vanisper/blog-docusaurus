import {
  ConsoleIcon,
  SANDBOX_TEMPLATES,
  Sandpack,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPredefinedTemplate,
  SandpackPreview,
  SandpackProvider,
  SandpackStack,
  SandpackTests,
  SANDPACK_THEMES,
} from "@codesandbox/sandpack-react";
import * as sandpackThemes from "@codesandbox/sandpack-themes";
import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  PageMetadata,
  useColorMode,
  createStorageSlot,
} from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import clsx from "clsx";

const ConsoleCounterButton: React.FC<{
  onClick: () => void;
  counter: number;
}> = ({ onClick, counter }) => {
  return (
    <button
      className={clsx("sp-button", styles.consoleButton)}
      onClick={onClick}
    >
      <ConsoleIcon />
      {counter > 0 && <span>{counter}</span>}
    </button>
  );
};
const getPreviewHeight =
  (
    showConsoleButton?: boolean,
    editorHeight: CSSProperties["height"] = `var(--sp-layout-height)`
  ) =>
  (ratio = 2): string | number | undefined => {
    if (showConsoleButton) {
      const height =
        typeof editorHeight === "number" ? `${editorHeight}px` : editorHeight;

      return `calc(${height} / ${ratio})`;
    }

    return editorHeight;
  };

const themes = sandpackThemes as unknown as typeof SANDPACK_THEMES;
function MySandPack() {
  const [theme, setTheme] = useState<string>("aquaBlue");
  const [template, setTemplate] = useState<SandpackPredefinedTemplate>("react");
  const [consoleVisibility, setConsoleVisibility] = useState(false);
  const [editorHeight, setEditorHeight] = useState(1000);
  const [counter, setCounter] = useState(0);
  const { colorMode } = useColorMode();

  const actionsChildren = (
    <ConsoleCounterButton
      counter={counter}
      onClick={(): void => setConsoleVisibility((prev) => !prev)}
    />
  );

  const templateFiles =
    SANDBOX_TEMPLATES[template as SandpackPredefinedTemplate] ?? {};
  const mode = "mode" in templateFiles ? templateFiles.mode : "preview";

  const editorPart = 50;
  const previewPart = 100 - editorPart;

  const rightColumnStyle = {
    flexGrow: previewPart,
    flexShrink: previewPart,
    minWidth: 700 * (previewPart / (previewPart + editorPart)),
    gap: consoleVisibility ? 1 : 0,
  };

  const rightColumnItemHeight = getPreviewHeight(
    consoleVisibility,
    editorHeight
  );

  const SandpackStorage = createStorageSlot("sandpack");

  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      colorMode === "dark" ? setTheme("nightOwl") : setTheme("aquaBlue");
    }
  }, [colorMode]);
  useEffect(() => {
    const config = JSON.parse(
      SandpackStorage.get()! ?? '{"theme":"aquaBlue","template":"react"}'
    );
    const { theme, template } = config;
    setTheme(theme);
    setTemplate(template);

    setEditorHeight(window.innerHeight - 101);
  }, []);
  useEffect(() => {
    SandpackStorage.set(
      JSON.stringify({
        theme,
        template,
      })
    );
  }, [theme, template]);

  return (
    <>
      <nav className={styles.liveCodeNav}>
        <a
          className={styles.navbarBrand}
          href="https://sandpack.codesandbox.io"
          target="_blank"
        >
          <div className={styles.navbarLogo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill={colorMode === "dark" ? "#000" : "#fff"}
              style={{ height: "100%" }}
            >
              <rect
                x="49.9973"
                y="24.489"
                width="32.2814"
                height="65.0273"
                stroke={colorMode === "dark" ? "#fff" : "#000"}
                strokeWidth="6.96721"
              />
              <rect
                x="17.4836"
                y="11.4836"
                width="32.2814"
                height="65.0273"
                stroke={colorMode === "dark" ? "#fff" : "#000"}
                strokeWidth="6.96721"
              />
            </svg>
          </div>
          <b className={styles.navbarTitle}>Sandpack</b>
        </a>
        <div className={styles.control}>
          <div>
            Template
            <select
              name="Template"
              value={template}
              style={{ marginLeft: ".5rem" }}
              onChange={({ target }) =>
                setTemplate(target.value as SandpackPredefinedTemplate)
              }
            >
              {Object.keys(SANDBOX_TEMPLATES).map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            Theme
            <select
              value={theme}
              style={{ marginLeft: ".5rem" }}
              onChange={({ target }) => setTheme(target.value)}
            >
              {Object.keys(themes).map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
      <div className={styles.sandpackBox}>
        <SandpackProvider template={template} theme={themes[theme]}>
          <SandpackLayout style={{ "--sp-layout-height": editorHeight + "px" }}>
            {/* <Sandpack></Sandpack> */}
            <SandpackFileExplorer />
            <SandpackCodeEditor
              {...{
                showTabs: true,
                showLineNumbers: true,
                showInlineErrors: true,
                showNavigator: true,
                closableTabs: true,
                wrapContent: true,
              }}
            />
            <SandpackStack>
              {mode === "preview" && (
                <SandpackPreview
                  actionsChildren={actionsChildren}
                  showNavigator={true}
                  showRefreshButton={true}
                  style={{
                    ...rightColumnStyle,
                    height: rightColumnItemHeight(consoleVisibility ? 1.5 : 1),
                  }}
                />
              )}
              {mode === "tests" && (
                <SandpackTests
                  actionsChildren={actionsChildren}
                  style={{
                    ...rightColumnStyle,
                    height: rightColumnItemHeight(consoleVisibility ? 1.5 : 1),
                  }}
                />
              )}

              <div
                className={styles.consoleWrapper}
                style={{
                  height: consoleVisibility ? rightColumnItemHeight(3) : 0,
                }}
              >
                <SandpackConsole
                  onLogsChange={(logs): void => setCounter(logs.length)}
                  showHeader={true}
                />
              </div>
            </SandpackStack>
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </>
  );
}
export default function LiveCode() {
  const title = "在线代码";
  const description = "基于 Sandpack 的在线代码编辑器";

  return (
    <>
      <PageMetadata title={title} description={description} />
      <Layout noFooter>
        <MySandPack />
      </Layout>
    </>
  );
}
