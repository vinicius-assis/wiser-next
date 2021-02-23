import styled from 'styled-components'

export const Form = styled.form`
  width: 311px;
  height: 381px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5ff;
  border-radius: 8px;
  position: relative;
  padding-top: 25px;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    background-color: unset;
    width: 320px;
    padding: 15px 10px auto;
    align-items: flex-start;
  }
`

export const Title = styled.h1`
  width: 140px;
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  color: #383e71;
  font-weight: 400;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 231px;
    font-size: 40px;
    text-align: start;
  }
`

export const Subtitle = styled.h3`
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  color: #989fdb;

  @media (min-width: 768px) {
    font-size: 16px;
    width: 222px;
  }
`

export const Label = styled.label`
  font-size: 10px;
  color: #383e71;
  text-transform: uppercase;
  margin-bottom: 8px;
  margin-top: 16px;
`

export const Input = styled.input.attrs(props => ({
  type: props.type
}))`
  width: 256px;
  background-color: #faf5ff;
  font-size: 10px;
  line-height: 48px;
  color: #989fdb;
  border: 1px solid #989fdb;
  padding-left: 17px;
  border-radius: 8px;

  &:focus {
    box-shadow: 0px 2px 8px #cf99db;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`

export const ErrorMessage = styled.span`
  font-size: 10px;
  color: #ff377f;
  margin-top: 10px;
  margin-left: 16px;
  display: none;
`

export const InputWrapper = styled.p`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 100%;
  }
`

export const Button = styled.button`
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  width: 168px;
  height: 48px;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px auto;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  cursor: pointer;

  @media (min-width: 768px) {
    width: 100%;
    box-shadow: 0px 10px 25px #cf99db;
  }
`
