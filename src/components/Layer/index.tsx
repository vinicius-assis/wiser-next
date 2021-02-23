import styled from 'styled-components'

const Layer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #130525 48%, rgba(105, 57, 153, 0) 110%);
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    background: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 110%);
  }
`

export default Layer
