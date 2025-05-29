// testNode.js
import React from 'react'
import { BaseNode } from './baseNode'

export const testNode = () => {
  return (
    <BaseNode
        title="Test Node"
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
            label: 'Test Input:',
            element: <input type="text" placeholder="Enter test input" />,
            },
            {
            label: 'Test Option:',
            element: (
                <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                </select>
            ),
            },
        ]}
        handles={[
            { type: 'source', position: 'right', id: 'test-output' },
            { type: 'target', position: 'left', id: 'test-input' },
        ]}
    />
  )
}

export default testNode