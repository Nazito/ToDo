import styled from 'styled-components'

export const PageWrapStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: column;
  width: 100%;
  max-width: 900px;
  padding: 20px;
  background: ${({ theme }): string => theme.colors.background};
  border-radius: 10px;
`

export const Heading = styled.h2`
  margin-bottom: 20px;
  padding: 20px;
  font-size: 24px;
  text-align: center;
  font-weight: 600;
`
