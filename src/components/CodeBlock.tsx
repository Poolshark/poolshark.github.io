
import React from "react";

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className="relative group">
      <pre className="bg-black/80 text-white font-mono rounded-lg p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          className="bg-primary/20 hover:bg-primary/40 text-primary-foreground px-2 py-1 rounded text-xs"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
