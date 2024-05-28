interface UserInputProps {
  text: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserInput: React.FC<UserInputProps> = ({
  text,
  onChange,
  ...props
}) => {
  return (
    <p>
      <label>{text}</label>
      <input onChange={onChange} {...props} />
    </p>
  );
};
