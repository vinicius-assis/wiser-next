import styled from 'styled-components'

export const Form = styled.form`
  width: 311px;
  height: 381px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5ff;
  border-radius: 8px;
  position: absolute;
  padding-top: 25px;
`

export const Title = styled.h1`
  width: 140px;
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  color: #383e71;
  font-weight: 400;
  margin-bottom: 16px;
`

export const Subtitle = styled.h3`
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  color: #989fdb;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-size: 10px;
  color: #383e71;
  text-transform: uppercase;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 256px;
  background-color: #faf5ff;
  font-size: 10px;
  line-height: 48px;
  color: #989fdb;
  border: 1px solid #989fdb;
  padding-left: 17px;
  border-radius: 8px;
  margin-bottom: 16px;
`

export const InputWrapper = styled.p`
  display: flex;
  flex-direction: column;
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
`
