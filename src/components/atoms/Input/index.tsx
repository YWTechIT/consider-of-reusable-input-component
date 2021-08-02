/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from "react";
import styled from "styled-components";

interface InputProps {
  onInsert: (id: string) => void;
}

const InputWrapper = styled.div`
  margin: 16px;
`;

const Input = ({ onInsert }: InputProps) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onInsert(title);
      setTitle("");
    },
    [title, onInsert]
  );

  return (
    <InputWrapper>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleChange}
          value={title}
          placeholder="할 일을 입력해주세요"
        />
      </form>
    </InputWrapper>
  );
};

export default Input;
