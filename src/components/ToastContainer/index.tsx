import React from 'react';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/ToastContext';
import { Container } from './style';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastConatiner: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastConatiner;
