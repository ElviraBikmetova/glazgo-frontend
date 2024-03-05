import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { ICandidate, ICandidateProm } from '../../../interfaces/ICandidate'
import { useNavigate } from 'react-router-dom'
import { CANDIDATE_STATUS } from '../../../constants'
import { formatDate } from '../../../utils'
import { ERoutes } from '../../../enums/routes'

interface CandidateItemProps {
    candidate: ICandidate
}
const CTableRow: FC<CandidateItemProps> = ({candidate}) => {
    const {_id, attachedDate, surname, firstName, patronymic, status, email, phone } = candidate
    const fio = `${surname} ${firstName} ${patronymic}`
    const date = formatDate(attachedDate)
    // const date = formatDate(statusChangeDate) // убрать вывод этой даты
    const [showFullContent, setShowFullContent] = useState(false)
    const navigate = useNavigate()

    const handleGoToCandidate = () => {
        if (showFullContent) {
            navigate(`/${ERoutes.Candidates}/${_id}`)
        } else {
            // Показать содержимое ячейки полностью
            setShowFullContent(true);
          }
    }

    return (
        <tr>
            <Td data-content={fio} onClick={handleGoToCandidate}>{fio}</Td>
            <Td data-content={CANDIDATE_STATUS[status]}>{CANDIDATE_STATUS[status]}</Td>
            <Td data-content={date}>{date}</Td>
        </tr>
    )
}

export default CTableRow

const Td = styled.td`
    padding: 10px 16px;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    position: relative;
    &:hover {
        /* overflow: visible; */
        &::after {
            content: attr(data-content);
            position: absolute;
            background-color: ${({ theme }) => theme.colors.lightGray};
            /* border: 1px solid ${({ theme }) => theme.colors.gray}; */
            border-radius: 4px;
            padding: 10px 16px;
            top: 0;
            left: 0;
            width: max-content;
            white-space: normal;
            z-index: 999;
        }
    }
    &:first-child:hover {
        cursor: pointer;
    }
`
