import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  dark,
  docco,
  dracula,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Profile from "components/exp/profile";

/* eslint-disable jsx-a11y/role-has-required-aria-props */
function HomePage() {
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
    <div>
      <header role="heading">next app</header>
      <Profile name="Chris" age={20} info="Software engineer" />
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, "")}
                style={docco as {}}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {code}
      </ReactMarkdown>
    </div>
  );
}

export default HomePage;
