import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Boilerplate with Typescript, React, NextJS and Styled Components'
}) => (
  <S.Wrappper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrappper>
)

export default Main
