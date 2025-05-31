// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div 
  className={type} 
  onDragStart={(event) => onDragStart(event, type)}
  onDragEnd={(event) => (event.target.style.cursor = 'grab')}
  onMouseEnter={(event) => {
    event.target.style.transform = 'translateY(-8px)';
    event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    event.target.style.border = '1px solid rgba(99, 102, 241, 0.3)';
    event.target.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
  }}
  onMouseLeave={(event) => {
    event.target.style.transform = 'translateY(0)';
    event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    event.target.style.border = '1px solid rgba(255, 255, 255, 0.3)';
    event.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  }}
  style={{
    cursor: 'grab',
    minWidth: '80px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.11)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    flexDirection: 'column',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    color: '#4a5568',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: '500',
    textAlign: 'center',
    gap: '8px'
  }}
  draggable
>
          <span style={{ backgroundColor: "rgba(255, 255, 255, 0.11)",color: '#000000' }}>{label}</span>
      </div>
    );
  };
  