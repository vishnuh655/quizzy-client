type InputProps = {
  inputType?: string;
  id: string;
  label?: string;
  onChange?: any;
  children?: any;
};

export const TextAreaInput = ({ id, label = "", onChange }: InputProps) => {
  const style =
    "p-2 border border-gray-300 focus:border-blue-500 rounded-md w-full";

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <br />
      <textarea className={style} id={id} onChange={onChange} />
    </>
  );
};

export const TextInput = ({
  inputType,
  id,
  label = "",
  onChange,
  children,
}: InputProps) => {
  const style =
    "p-2 border border-gray-300 focus:border-blue-500 rounded-md w-full";

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <br />
      <input className={style} id={id} type={inputType} onChange={onChange} />
      {children}
    </>
  );
};
