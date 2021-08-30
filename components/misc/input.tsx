type InputProps = {
  inputType?: string;
  id: string;
  label?: string;
  onChange?: any;
};

export const TextAreaInput = ({ id, label = "", onChange }: InputProps) => {
  const style = "p-2 border border-gray-300 focus:border-blue-500 rounded-md ";

  return (
    <div className="m-2">
      <label htmlFor={id}>{label}</label>
      <br />
      <textarea className={style} id={id} onChange={onChange} />
    </div>
  );
};

export const TextInput = ({
  inputType,
  id,
  label = "",
  onChange,
}: InputProps) => {
  const style = "p-2 border border-gray-300 focus:border-blue-500 rounded-md ";

  return (
    <div className="p-1 m-2">
      <label htmlFor={id}>{label}</label>
      <br />
      <input className={style} id={id} type={inputType} onChange={onChange} />
    </div>
  );
};
