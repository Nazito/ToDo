import styled from 'styled-components'

export const Wrapper = styled.ul` 
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px; 
`

export const Task = styled.li<{ $isCompleted: boolean }>` 
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  border-bottom: 1px solid;
  border-color: ${({ theme }): string => theme.colors.borderInputDefault};
  text-decoration: ${({ $isCompleted }): string => {
    return $isCompleted ? 'line-through' : 'none'
  }};
  padding: 15px 10px;
`
export const EmptyTextStyled = styled.div`
  width: 100%;
  padding: 15px;
  color: ${({ theme }):string => theme.colors.gray};
`
