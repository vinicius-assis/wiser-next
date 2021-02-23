import styled from 'styled-components'
import background from '../../../public/assets/background.png'

const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: linear-gradient(
    0deg,
    #130525 48%,
    rgba(105, 57, 153, 0) 110%
  );
  background-image: url(${background});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
`

export default ImageContainer
