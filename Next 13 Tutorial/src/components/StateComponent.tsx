import { Dispatch, SetStateAction, useState } from 'react';

type UserRole = 'admin' | 'user' | undefined;

const StateComponent = () => {
  const [message, setMessage] = useState<UserRole>();

  return <StateButton message={message} setMessage={setMessage} />;
};

export default StateComponent;

type StateButtonProps = {
  message: UserRole;
  setMessage: Dispatch<SetStateAction<UserRole>>;
};

const StateButton: React.FC<StateButtonProps> = ({ message, setMessage }) => {
  const handleClick = () => {
    setMessage('admin');
  };

  return <button onClick={handleClick}>{message}</button>;
};