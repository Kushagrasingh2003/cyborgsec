import React from 'react';
import { Button } from "./ui/button";

const CustomAlert = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop z-50">
      <div className="modal">
        <div className="modal-content">
          {children}
          <Button className='rounded-full z-50' onClick={onClose}>X</Button>
        </div>
      </div>
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          
        }
        .modal {
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        .modal-content {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default CustomAlert;