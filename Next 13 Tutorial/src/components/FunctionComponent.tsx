import { FormEventHandler } from 'react';

const PassingFunction = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(e.target);
  };

  return <FunctionComponent handleSubmit={handleSubmit} />;
};

type Props = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

const FunctionComponent: React.FC<Props> = ({ handleSubmit }) => {
  return <form onSubmit={handleSubmit}> FunctionComponent</form>;
};

export default FunctionComponent;
