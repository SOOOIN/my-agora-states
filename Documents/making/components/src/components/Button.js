import React from 'react';
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0 1rem;
 padding-top: .3rem;
  text-align: center;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }

  /* 기타 
      버튼 여러개 생성시, 여백으로 띄워줌.
  */
  & + & {
    margin-left: 1rem;
  }
`;


function Button({ children, ...rest }) {
  
  return <StyledButton  {...rest}>{children}</StyledButton>;
  
}

export default Button;