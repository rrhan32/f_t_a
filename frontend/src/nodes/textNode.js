// textNode.js
import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';
import { useRef } from 'react';
import { useAutosizeTextArea } from './useAutosizeTextArea';


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textRef = useRef(null);
  const [variables, setVariables] = useState([]);
  
  const [size, setSize] = useState({ width: 200, height: 80 });
  
  useAutosizeTextArea(textRef.current, currText);

  // Extract variables from {{varName}} format
  const extractVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*}}/g;
    const found = new Set();
    let match;
    while ((match = regex.exec(text))) {
      found.add(match[1]);
    }
    return Array.from(found);
  };

  // Update variables on text change
  useEffect(() => {
    const extracted = extractVariables(currText);
    setVariables(extracted);
  }, [currText]);

  const handles = [
  {
    type: 'source',
    position: Position.Right,
    id: `${id}-output`,
  },
  ...variables.map((v, i) => ({
    type: 'target',
    position: Position.Left,
    id: `${id}-value-${v}`,
    top: `${(i + 1) * 30}px`,  // spacing out handles vertically
  })),
];

  return (
    <BaseNode
      title="Text"
      style={{
            backgroundColor:" #e74c3c",
            padding: "20px",
            borderRadius: "4px",
            color: "white",
            fontWeight: "bold",
            resize: "both",
            overflow: "auto",
            minHeight: "50px",
            minWidth: "100px",
      }}
      formFields={[
        {
          label: 'Text:',
          element: <textarea type="text" value={currText} onChange={e => setCurrText(e.target.value)} ref={textRef} 
          placeholder='Enter text here' style={{ width: '100%', height: '100%' }}
                  />,
        },
      ]}
      handles={handles}
    />
  );
};
