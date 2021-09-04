type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: any;
  children?: any;
};

export const Button = ({ type, onClick, children }: ButtonProps) => (
  <button
    type={type || `button`}
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 m-2 rounded"
  >
    {children}
  </button>
);
