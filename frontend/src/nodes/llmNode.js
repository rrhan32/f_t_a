// llmNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
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
        { label: '', element: <span>This is a LLM.</span> },
      ]}
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-system`, top: '33%' },
        { type: 'target', position: Position.Left, id: `${id}-prompt`, top: '66%' },
        { type: 'source', position: Position.Right, id: `${id}-response` },
      ]}
    />
  );
};
