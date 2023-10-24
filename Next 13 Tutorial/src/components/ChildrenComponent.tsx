import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const ChildrenComponent: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default ChildrenComponent;

const OtherComponent: React.FC = () => {
  return (
    <ChildrenComponent>
      <div />
    </ChildrenComponent>
  );
};
