import styled from 'styled-components'

const ContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;

  @media (min-width: 768px) {
    width: 100%;
    min-width: 456px;
    position: static;
    background-color: #f5f5ff;
  }

  @media (min-width: 1366px) {
    width: 100%;
  }
`

export default ContentWrapper
