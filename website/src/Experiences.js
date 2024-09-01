import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Experiences() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`component-wrapper ${expanded ? 'blur-background' : ''}`}>
      <Card
        className={`p-3 ${expanded ? 'expanded' : ''}`}
        style={{
          borderRadius: '15px',
          backgroundColor: '#f8f9fa',
          position: expanded ? 'fixed' : 'relative',
          top: expanded ? '50%' : 'unset',
          left: expanded ? '50%' : 'unset',
          transform: expanded ? 'translate(-50%, -50%) scale(1)' : 'translate(0, 0) scale(0.95)',
          zIndex: expanded ? 1050 : 1,
          width: expanded ? '90%' : 'auto',
          height: expanded ? '90%' : 'auto',
          maxHeight: expanded ? '90%' : 'auto',
          overflowY: expanded ? 'auto' : 'unset',
          boxShadow: expanded ? '0px 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
          transition: expanded ? 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out' : 'none',
          opacity: expanded ? 1 : 0.9,
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5>Experiences</h5>
          <Button variant="primary" size="sm" onClick={handleExpand}>
            {expanded ? 'Close' : 'Expand'}
          </Button>
        </div>
        <div className="mt-3">
          <p>Experiences Content</p>
        </div>
      </Card>
    </div>
  );
}

export default Experiences;
