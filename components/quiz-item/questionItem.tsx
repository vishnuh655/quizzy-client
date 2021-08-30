const QuestionItem = ({ children, questionContent }: any) => (
  <div className="bg-yellow-400 p-10 rounded-lg	border-double border-4">
    <h1 className="text-center font-bold text-xl">{questionContent}</h1>
    {children}
  </div>
);

export default QuestionItem;
