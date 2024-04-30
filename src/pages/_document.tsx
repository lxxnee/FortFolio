import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      <Head />
      <body className="font-normal break-keep selection:bg-PRIMARY_LIGHT selection:dark:text-BLACK text-BLACK dark:bg-BLACK dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
