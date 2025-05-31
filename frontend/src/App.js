import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { nodes } from './add_node';

function App() {
  return (
    <div>
      <PipelineToolbar nodes={nodes} />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
