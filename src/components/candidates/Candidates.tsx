import { FC, useEffect } from 'react'
import Options from '../vacancies/Options'
import Pagination from '../vacancies/Pagination'
import * as C from '../../styles/components'
import { ReactComponent as Close } from '../../assets/images/icons/close.svg'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import CTableAll from './table/CTableAll'
import { useAppDispatch } from '../../hooks/redux'
import { resetToInitialState } from '../../store/redusers/paginationSlice'
import { ERoutes } from '../../enums/routes'

const Candidates: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleClose = () => {
    navigate(ERoutes.Root)
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
        <Options path={'/new-candidate'}/>
        <CTableAll />
        <Pagination />
    </div>
  )
}

export default Candidates

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`