import type { NextPage } from "next";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Layout from "../../../components/layout";
import { TextAreaInput, TextInput } from "../../../components/misc/input";

const Create: NextPage = () => {
  const optionItemDefault = {
    optionItemCount: 1,
    optionItems: [
      {
        value: "",
      },
    ],
  };
  const [state, setState] = useState(optionItemDefault);
  const addOptionItem = (): void => {
    setState((prevState) => ({
      ...prevState,
      optionItems: [...prevState.optionItems, optionItemDefault.optionItems[0]],
    }));
  };

  const deleteOptionItem = (): void => {
    // console.log(e);
  };

  return (
    <Layout>
      Create Quiz {1}
      <TextAreaInput
        inputType="textAreaWithLabel"
        id="textAreaWithLabelCreate"
        label="Question content:"
      />
      {state.optionItems.map((option, index) => (
        <TextInput key={index} inputType="text" id={`${index  }`} label="Option:">
          <FaRegTrashAlt
            className="inline"
            id={`${index  }`}
            onClick={deleteOptionItem}
          />
        </TextInput>
      ))}
      <button type="button" onClick={addOptionItem}>
        Add Option Item
      </button>
    </Layout>
  );
};

export default Create;
