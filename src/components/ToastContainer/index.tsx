import React from 'react';
import { useTransition } from 'react-spring';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/ToastContext';
import { Container } from './style';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastConatiner: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTranslations = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTranslations.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastConatiner;
