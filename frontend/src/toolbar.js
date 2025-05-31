// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = ({nodes}) => {
    
    return (
        <div style={{ padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {nodes.map((item) => {
                    return (
                        <DraggableNode 
                            key={item.type} 
                            type={item.type} 
                            label={item.label} 
                        />
                    );
                })}
                {/* <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='text' label='test' /> */}
            </div>
        </div>
    );
};
