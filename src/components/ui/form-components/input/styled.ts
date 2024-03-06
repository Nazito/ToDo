import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
`

export const InputBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
`

export const InputStyled = styled.input<{
  $isFocused: boolean
  $isError: boolean
}>`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }): string => theme.colors.black};
  border-bottom: 1px solid;
  border-color: ${({ theme, $isError }): string => {
    return $isError ? theme.colors.errorRed : theme.colors.borderInputDefault
  }};
  padding: 15px 0 15px 0;

  &:focus {
    border-color: ${({ theme }): string => theme.colors.green};
  }

  &::placeholder {
    color: ${({ theme }): string => theme.colors.gray};
  }
`

export const Label = styled.label<{ $isFocused: boolean }>`
  color: ${({ $isFocused, theme }): string => {
    return theme.colors[$isFocused ? 'grayC4' : 'gray']
  }};
  position: absolute;
  top: ${({ $isFocused }): string => {
    return $isFocused ? '0' : '50%'
  }};
  transform: translateY(-50%);
  left: 0;
  font-weight: 500;
  font-size: ${({ $isFocused }): string => {
    return $isFocused ? '12px' : '16px'
  }};
  line-height: ${({ $isFocused }): string => {
    return $isFocused ? '100%' : '140%'
  }};
`

export const ErrorMessage = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  display: flex;
  align-items: center;
  text-align: right;
  color: ${({ theme }): string => theme.colors.errorRed};
  position: absolute;
  top: 0;
  right: 0;
`
