import styled from 'styled-components'

export const WrapperFilters = styled.div` 
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
  gap: 20px; 
  padding: 20px 0;
`
export const FilterTab = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 4px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1;
  padding-bottom: 16px;
  color: ${({ theme, $isActive }):string => theme.colors[$isActive ? 'green' : 'black']};
  cursor: pointer;
  position: relative;
  z-index: 2;
  border-bottom: 2px solid
    ${({ theme, $isActive }):string => { return $isActive ? theme.colors.green : 'transparent' }};

  span {
    min-width: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 4.5px;
    background: ${({ theme, $isActive }):string => theme.colors[$isActive ? 'green' : 'grayC4']};
    border-radius: 800px;
    color: ${({ theme }):string => theme.colors.background};
  }
`
