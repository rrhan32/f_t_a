// submit.js
import { useStore } from './store'; // Assuming you’re using Zustand or similar
import { shallow } from 'zustand/shallow';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
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
    } finally {
     setLoading(false);
    }
  };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button variant="contained" color='success' type="submit" onClick={handleSubmit}>Submit</Button>
            {loading && (
              <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={loading}
                // onClick={handleClose}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
        </div>
    );
}
