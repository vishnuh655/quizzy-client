import QuestionItem from "./questionItem";

const QuizItem = ({ children, questionContent }: any) => (
  <div className="container">
    <div className="m-10">
      <QuestionItem questionContent={questionContent} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-5">
        {children}
      </div>
    </div>
  </div>
);

export default QuizItem;
