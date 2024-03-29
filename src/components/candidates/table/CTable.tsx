import React, { FC, useEffect } from 'react'
import TableHeader from './CTableHeader'
import { styled } from 'styled-components'
import TableRow from './CTableRow'
import candidateApi from '../../../services/CandidateService'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setPaginationData } from '../../../store/redusers/paginationSlice'

const CTable: FC = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const params = useAppSelector(state => state.pagination.params)
    const {data: candidates} = candidateApi.useFetchVacancyCandidatesQuery(id ? id : '')
    // const candidates = data?.results

    // useEffect(() => {
    //     if (data) {
    //         dispatch(setPaginationData(data))
    //     }
    // }, [data, dispatch])

    return (
        <TableContainer>
            <Table>
                <TableHeader />
                <tbody>
                    {candidates &&candidates.map(candidate => <TableRow key={candidate._id} candidate={candidate} />)}
                </tbody>
            </Table>
        </TableContainer>

  )
}

export default CTable

const TableContainer = styled.div`
    max-width: 100%;
    overflow-x: auto;
`

const Table = styled.table`
    table-layout: fixed;
    width: 100%;
    max-width: 600px;
    border-collapse: collapse;
    border: 1px solid #D7D7D7;
    margin: 10px 0;
`
