import type { NextPage } from "next";
import Layout from "../../../components/layout";
import { TextAreaInput, TextInput } from "../../../components/misc/input";

const Create: NextPage = () => {
  const a = 10;
  return (
    <Layout>
      Create Quiz {a}
      <TextAreaInput
        inputType="textAreaWithLabel"
        id="1"
        label="Question content:"
      />
      <TextInput inputType="text" id="2" label="Option:" />
    </Layout>
  );
};

export default Create;
