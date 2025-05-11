import styled from "styled-components";

const TodoListItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, checked } = todo;

  return (
    <Item>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(id)}
        />
        <Text checked={checked}>{text}</Text>
      </label>
      <DeleteButton onClick={() => onRemove(id)}>삭제</DeleteButton>
    </Item>
  );
};

export default TodoListItem;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: white;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  height: 48px;
  overflow: hidden;
`;

const Text = styled.span`
  margin-left: 0.5rem;
  color: #333333;
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 150px;
  max-width: 150px;
  display: inline-block;
`;
const DeleteButton = styled.button`
  background: #b00020;
  color: white;
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  margin-left: 1rem;
`;