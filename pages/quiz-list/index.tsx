import type { NextPage } from "next";
import useSWR from "swr";
import Layout from "../../components/layout";
import QuizItem from "../../components/quiz-item/quizItem";
import OptionItem from "../../components/quiz-item/optionItem";

const fetcher = (url: any) =>
  fetch(url, {
    method: "get",
  }).then((res) => res.json());

const Home: NextPage = () => {
  const { data } = useSWR<any>("http://localhost:8000/api/questions", fetcher);
  return (
    <Layout>
      {data
        ? data.data.map((item: any) => (
            <QuizItem
              key={item.questionId}
              questionContent={item.questionContent}
            >
              {item.options.map((option: any) => (
                <OptionItem
                  key={option.optionId}
                  optionContent={option.optionContent}
                />
              ))}
            </QuizItem>
          ))
        : ""}
    </Layout>
  );
};

export default Home;
