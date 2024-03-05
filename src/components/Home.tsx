import React, { useState } from 'react'
import { ReactComponent as Welcome } from '../assets/images/welcome.svg'
import { ReactComponent as Vacancies } from '../assets/images/icons/vacancies.svg'
import { ReactComponent as Candidates } from '../assets/images/icons/candidates.svg'
import { ReactComponent as Projects } from '../assets/images/icons/projects.svg'
import { ReactComponent as Profile } from '../assets/images/icons/profile.svg'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import authApi from '../services/AuthService'
import { ERoutes } from '../enums/routes'

const Home = () => {
  // const [skip, setSkip] = useState(true)
  // const {data: users, refetch} = authApi.useGetUsersQuery(null, {skip})

  // const getUsers = () => {
  //   setSkip(false)
  //   if (!skip) refetch()
  // }

  return (
    <Wrapper>
      <SWelcome>
        <Welcome/>
      </SWelcome>
      {/* <button onClick={getUsers}>Получить пользователей</button>
      {users && users.map((user) => <div key={user.email}>{user.email}</div>)} */}
      <Board>
        <Link to={ERoutes.Vacancies}>
          <BoardItem>
            <IconWrapper><Vacancies/></IconWrapper>
            <div>Вакансии</div>
          </BoardItem>
        </Link>
        <Link to={ERoutes.Candidates}>
          <BoardItem>
            <IconWrapper><Candidates/></IconWrapper>
            <div>Кандидаты</div>
          </BoardItem>
        </Link>
        <BoardItem>
          <IconWrapper><Projects/></IconWrapper>
          <div>Проекты</div>
        </BoardItem>
        <BoardItem>
          <IconWrapper><Profile/></IconWrapper>
          <div>Профиль</div>
        </BoardItem>
      </Board>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  height: 100svh;

`
const SWelcome = styled.div`
  margin: 50px 0;
  svg {
    width: 360px;
    height: 250px;
  }
`
const IconWrapper = styled.div`
  svg {
    width: 64px;
    height: 64px;
  }
  margin-bottom: 12px;
`
const Board = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 10px;
  row-gap: 50px;
`
const BoardItem = styled.div`
  text-align: center;
  font-weight: 700;
`
