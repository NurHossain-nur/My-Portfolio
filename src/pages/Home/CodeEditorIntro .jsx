import { useState } from "react";
import Typewriter from "typewriter-effect";
import { Light, Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./syntaxOverride.css"; // import your CSS override file
import { solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";


const codeString = `const aboutMe = {
  focus: "Clean, modern & responsive web apps",
  stack: ["React", "Tailwind", "Firebase"],
  passion: "Solving real-world problems through code and building scalable, intuitive apps."
};`;

const CodeEditorIntro = () => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg shadow-md max-w-full md:max-w-xl bg-gray-900 overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 flex justify-between items-center text-white">
        <span className="text-sm font-semibold">intro.js</span>
        <div className="space-x-1">
          <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>

      <div className="text-sm font-mono px-4 py-3 text-green-300 leading-relaxed break-words whitespace-pre-wrap">
        {!showCode ? (
          <Typewriter
            options={{
              delay: 25,
              cursor: "_",
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(codeString)
                .callFunction(() => setShowCode(true))
                .start();
            }}
          />
        ) : (
          <SyntaxHighlighter
            language="javascript"
            style={solarizedLight }
            wrapLongLines={true}
            className="react-syntax-highlighter"
            showLineNumbers={false}
            customStyle={{ background: "transparent", margin: 0, padding: 0 }}
          >
            {codeString}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default CodeEditorIntro;
