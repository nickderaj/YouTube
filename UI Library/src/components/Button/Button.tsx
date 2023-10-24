import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const styles = () => {
    const propStyle = props.style ?? {};
    if (props.disabled) return propStyle;
    if (variant === 'primary') return { borderColor: '#6366F1', backgroundColor: '#6366F1', color: '#FAFAFA', ...propStyle };
    if (variant === 'secondary') return { borderColor: '#6366F1', backgroundColor: '#FAFAFA', color: '#6366F1', ...propStyle };
    return propStyle;
  };

  return (
    <button {...props} style={styles()}>
      {props.children}
    </button>
  );
};

export default Button;
