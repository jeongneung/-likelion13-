import { useState } from "react";
import styled from "styled-components";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onInsert(value.trim());
      setValue("");
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <Button type="submit">추가</Button>
    </Form>
  );
};

export default TodoInsert;

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
`;

const Button = styled.button`
  background: #006400;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: none;
`;