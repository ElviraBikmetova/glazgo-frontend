import React, { useEffect } from 'react'
import Options from '../vacancies/Options'
import Pagination from '../vacancies/Pagination'
import * as C from '../../styles/components'
import CTable from './table/CTable'
import { ReactComponent as Close } from '../../assets/images/icons/close.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import vacancyApi from '../../services/VacancyService'
import { useAppDispatch } from '../../hooks/redux'
import { resetToInitialState } from '../../store/redusers/paginationSlice'

const CandidatesOfVacancy = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const {data: vacancy} = vacancyApi.useFetchVacancyQuery(id ? id : '')
  const dispatch = useAppDispatch()
  const handleClose = () => {
    navigate(-1)
  }

  useEffect(() => {
    return () => {
      // Эта логика выполнится только при размонтировании компонента
      dispatch(resetToInitialState())
    };
  }, [])

  return (
    <div>
      <Title>
          <C.H2>Кандидаты</C.H2>
          <C.NButton onClick={handleClose}>
              <C.SvgIconWrapper><Close/></C.SvgIconWrapper>
          </C.NButton>
      </Title>
      <SubTitle>
        <div>по вакансии:</div>
        <VacancyName>{vacancy && vacancy.name}</VacancyName>
      </SubTitle>
      <Options path={'/new-candidate'}/>
      <CTable />
      <Pagination />
    </div>
  )
}

export default CandidatesOfVacancy

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SubTitle = styled.div`
  margin-top: -20px;
`
const VacancyName = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 26px; /* 130% */
  letter-spacing: -0.1px;
  margin-bottom: 30px;
`