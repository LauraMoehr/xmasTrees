import styled from 'styled-components';
import { useState } from 'react';

function Tags({ label, tags, onDeleteTag, onUpdateTags }) {
  const [tagInput, setTagInput] = useState('');

  const handleChange = (event) => {
    const tagInputValue = event.target.value;
    setTagInput(tagInputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Wenn Enter gedrückt, schicke das Form nicht ab
      event.preventDefault();
      onUpdateTags(tagInput.toUpperCase());
      setTagInput('');
    }

    if (event.key === 'Backspace' && tagInput === '' && tags.length > 0) {
      onDeleteTag(tags[tags.length - 1]);
    }
  };

  return (
    <>
      <label htmlFor="tags">{label}</label>
      <TagsContainer>
        <TagsWrapper>
          {tags.map((tag, index) => (
            <Tag key={index}>
              {tag} <span onClick={() => onDeleteTag(tag)}>&times;</span>
            </Tag>
          ))}
          <input
            type="text"
            id="tags"
            name="tags"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Add a tag"
            value= {tagInput}
          />
        </TagsWrapper>
      </TagsContainer>
    </>
  );
}

export default Tags;

const TagsContainer = styled.section`
  display: grid;
  margin: 2rem auto;
  width: 90%;
  input {
    margin-left: 0.5rem;
    outline: none;
    padding: 0.5rem 0.2rem;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.4rem;
`;

const Tag = styled.span`
  background: white;
  color: #165b33;
  margin: 0.2rem;
  padding: 0.2rem 0.4rem 0.3rem;

  span {
    color: #bb2528;
    border: 1px solid #bb2528;
    background: #f8b229;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    padding: 0 3px;
    width: 0.7rem;
    height: 1.4rem;
    text-align: center;
  }
`;
