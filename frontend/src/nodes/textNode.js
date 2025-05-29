// textNode.js
import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';
import { useRef } from 'react';
import { useAutosizeTextArea } from './useAutosizeTextArea';


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const textRef = useRef(null);

  
  const [size, setSize] = useState({ width: 200, height: 80 });
  
  useAutosizeTextArea(textRef.current, currText);

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
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    />
  );
};
