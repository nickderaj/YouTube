interface HeaderComponentProps {
  title?: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ title }) => {
  return <h1>{title ?? 'Hello'}</h1>;
};

export default HeaderComponent;
