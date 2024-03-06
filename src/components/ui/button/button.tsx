import styled from 'styled-components'
import { ButtonPropsType } from './types'

export const Button = styled.button<ButtonPropsType>`
  width: fit-content;
  text-align: center;
  text-indent: 0;
  font-style: normal;
  border: none;
  display: flex;
  align-items: center;
  transition: all 0.25s ease;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  padding: 16px 60px;
  gap: 10px;
  border-radius: 500px;
  font-weight: 600;
  font-size: 22px;
  line-height: 120%;
  outline: ${({ theme, variant }): string => theme.buttons[variant].border};
  background: ${({ theme, variant }): string => {
    return theme.buttons[variant].background
  }};
  color: ${({ theme, variant }): string => theme.buttons[variant].color};

  &:not(:disabled):hover {
    background: ${({ theme, variant }): string => {
    return theme.buttons[variant].backgroundHover
  }};
    color: ${({ theme, variant }): string => theme.buttons[variant].colorHover};
    outline: ${({ theme, variant }): string => {
    return theme.buttons[variant].borderHover
  }}; 
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
