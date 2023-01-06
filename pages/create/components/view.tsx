import Markdown from "components/markdown";
import React from "react";

export default function View({ content }: { content: string }) {
  const code = `
  ~~~js
  function test(x,y) {
    return x+y;
  }

  console.log(test(2,3))  // 5
  ~~~

  ~~~python
  print("Hello python")
  ~~~

  ~~~css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  html,
  body {
    font-family: "DM Mono", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
  }
  
  pre {
    border-radius: 8px;
    padding: 1rem;
  }
  ~~~

  ~~~js
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  ~~~
  # something is what?
  > another
  ~~ great ~~
`;
  return (
    <div className="md:w-[50%] w-full">
      <Markdown code={content} />
    </div>
  );
}
