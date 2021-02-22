import styled from 'styled-components'
import background from '../../../public/assets/background.png'

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
`

export default Container
