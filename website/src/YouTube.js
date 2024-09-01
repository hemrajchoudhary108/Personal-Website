import React from 'react';
import { Card, Button } from 'react-bootstrap';

function YouTube({ expanded, handleExpand }) {
  const cardStyles = {
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
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
    opacity: expanded ? 1 : 0.9,
    padding: '20px'
  };

  const wrapperStyles = {
    position: 'relative',
    transition: 'filter 0.3s ease-in-out',
    filter: expanded ? 'blur(5px)' : 'none',
  };

  return (
    <div style={wrapperStyles}>
      <Card style={cardStyles}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>YouTube</h5>
          <Button variant="primary" size="sm" onClick={handleExpand}>
            {expanded ? 'Close' : 'Expand'}
          </Button>
        </div>
        <div className="mt-3">
          <p>YouTube Content</p>
        </div>
      </Card>
    </div>
  );
}

export default YouTube;
