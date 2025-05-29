// inputNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode'; 

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      formFields={[
        {
          label: 'Name:',
          element: <input type="text" value={currName} onChange={e => setCurrName(e.target.value)} />,
        },
        {
          label: 'Type:',
          element: (
            <select value={inputType} onChange={e => setInputType(e.target.value)}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          ),
        },
      ]}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` },
      ]}
    />
  );
};
