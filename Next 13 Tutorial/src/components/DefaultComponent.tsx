type Props = {
  randomNumber?: number;
};

const DefaultComponent: React.FC<Props> = ({ randomNumber = 0 }) => {
  const calculateSomething = (): number => {
    return randomNumber + 10;
  };

  return <div>DefaultComponent</div>;
};

export default DefaultComponent;
