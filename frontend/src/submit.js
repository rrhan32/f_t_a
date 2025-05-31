// submit.js
import { useStore } from './store'; // Assuming you’re using Zustand or similar
import { shallow } from 'zustand/shallow';
import Button from '@mui/material/Button';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
      console.log('Submitting pipeline with nodes:', nodes, 'and edges:', edges);
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit pipeline');
      }

      const data = await response.json();

      alert(`✅ Pipeline submitted!
                Nodes: ${data.num_nodes}
                Edges: ${data.num_edges}
                Is_DAG: ${data.is_dag ? 'Yes ✅' : 'No ❌'}`);
    } catch (error) {
      console.error('Error submitting pipeline:', error);
      alert('❌ Error submitting pipeline. Check the console for details.');
    }
  };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button variant="contained" color='success' type="submit" onClick={handleSubmit}>Submit</Button>
        </div>
    );
}
