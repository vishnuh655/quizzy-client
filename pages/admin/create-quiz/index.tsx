import type { NextPage } from "next";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Layout from "../../../components/layout";
import { TextAreaInput, TextInput } from "../../../components/misc/input";
import { Button } from "../../../components/misc/button";

const Create: NextPage = () => {
  const optionItemDefault = {
    optionItems: [
      {
        value: "",
        index: 0,
        isAnswer: false,
      },
    ],
    questionContent: "",
  };
  const [state, setState] = useState(optionItemDefault);
  const addOptionItem = (): void => {
    setState((prevState) => ({
      ...prevState,
      optionItems: [
        ...prevState.optionItems,
        {
          value: "",
          index: prevState.optionItems.length,
          isAnswer: false,
        },
      ],
    }));
  };

  const deleteOptionItem = (index: number): void => {
    setState((prevState) => ({
      ...prevState,
      optionItems: state.optionItems.filter((option) => option.index !== index),
    }));
  };

  const optionTextEvent = (e: any) => {
    setState((prevState) => ({
      ...prevState,
      optionItems: prevState.optionItems.map((option) =>
        option.index === Number(e.target.id)
          ? { ...option, value: e.target.value }
          : option
      ),
    }));
  };

  const optionIsAnswerChange = (e: any) => {
    setState((prevState) => ({
      ...prevState,
      optionItems: prevState.optionItems.map((option) =>
        option.index === Number(e.target.id)
          ? { ...option, isAnswer: e.target.checked }
          : option
      ),
    }));
  };

  const questionContentEvent = (e: any) => {
    setState((prevState) => ({
      ...prevState,
      questionContent: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    setState(optionItemDefault);
    e.target.reset();
    // document.getElementById("create-quiz-form")?.reset();
  };

  const submit = () => {
    const data: any = {
      questions: [],
    };
    data.questions.push({
      questionContent: state.questionContent,
      typeId: 1,
      options: state.optionItems.map((option) => ({
        optionContent: option.value,
        isAnswer: option.isAnswer,
      })),
    });

    axios.post("http://localhost:8000/api/questions", data).then(() => {});
  };

  return (
    <Layout>
      <form id="create-quiz-form" onSubmit={handleSubmit}>
        <TextAreaInput
          inputType="textAreaWithLabel"
          id="textAreaWithLabelCreate"
          label="Question content:"
          onChange={questionContentEvent}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-5">
          {state.optionItems.map((option) => (
            <div key={option.index} className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <TextInput
                  inputType="text"
                  id={`${option.index}`}
                  label="Option:"
                  onChange={optionTextEvent}
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label htmlFor={`isAnswer${option.index}`}>isAnswer:</label>
                <br />
                <input
                  type="checkbox"
                  name="isAnswer"
                  className="h-6 w-6 m-2"
                  id={`isAnswer${option.index}`}
                  onChange={optionIsAnswerChange}
                />
              </div>
              <FaRegTrashAlt
                className="inline w-full md:w-1/2 px-3"
                id={`${option.index}`}
                onClick={() => deleteOptionItem(option.index)}
              />
            </div>
          ))}
        </div>
        <Button type="button" onClick={addOptionItem}>
          Add Option Item
        </Button>
        <Button type="submit" onClick={submit}>
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default Create;
