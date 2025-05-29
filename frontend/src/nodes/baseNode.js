// src/nodes/BaseNode.js
import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  title,
  formFields = [],
  handles = [],
  style = {},
}) => {
  return (
    <div style={{...style}}>
      <div >
        <div><strong>{title}</strong></div>

        {/* Form Section */}
        <div>
            {formFields.map(({ label, element }, idx) => (
            <div key={idx} style={{ marginTop: 4 }}>
                <label>{label} {element}</label>
            </div>
            ))}
        </div>

        {/* Handles */}
        {handles.map(({ type, position, id, top }, idx) => (
            <Handle
            key={idx}
            type={type}
            position={position}
            id={id}
            style={{ top }}
            />
        ))}
        </div>
    </div>
  );
};
