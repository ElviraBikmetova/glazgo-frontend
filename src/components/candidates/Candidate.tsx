import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as C from '../../styles/components'
import * as S from './styles'
import { ReactComponent as Close } from '../../assets/images/icons/close.svg'
import { ReactComponent as Telegram } from '../../assets/images/icons/telegram.svg'
import { ReactComponent as WatsApp } from '../../assets/images/icons/watsApp.svg'
import candidateApi from '../../services/CandidateService'
import { CANDIDATE_STATUS } from '../../constants'

const Candidate = () => {
    const {id} = useParams()
    const {data: candidate } = candidateApi.useFetchCandidateQuery(id ? id : '')
    const navigate = useNavigate()
    const handleGoBack = () => navigate(-1)
    // let candidate, vacancy, recruiter, customer
    // if (candidateData) {
    //     candidate = candidateData._id
    //     // vacancy = candidateData.vacancyId
    //     // recruiter = candidateData.recruterId
    //     // customer = vacancy.customer
    // }


    return (
        <div>
            <S.Title>
                <C.H2>Кандидат</C.H2>
                <C.NButton onClick={handleGoBack}>
                    <C.SvgIconWrapper><Close/></C.SvgIconWrapper>
                </C.NButton>
            </S.Title>
            {/* <S.SubTitle>Прикреплен к вакансии ID рекрутером 19.11.2023</S.SubTitle> */}
            <div>
                <div>ФИО</div>
                <S.ItemValue>{candidate?.surname} {candidate?.firstName} {candidate?.patronymic}</S.ItemValue>
                <div>Вакансия</div>
                <S.ItemValue>{candidate?.vacancy?.name}</S.ItemValue>
                {/* {customer?.firstName &&
                <div>
                    <div>Заказчик</div>
                    <S.ItemValue>{customer?.lastName} {customer?.firstName}</S.ItemValue>
                </div>
                } */}
                {/* <div>Реферер</div>
                <S.ItemValue></S.ItemValue> */}
                <div>Рекрутер</div>
                <S.ItemValue>{}</S.ItemValue>
                {/* <div>Источник</div>
                <S.ItemValue></S.ItemValue> */}
                <div>Email</div>
                <S.ItemValue>{candidate?.email}</S.ItemValue>
                <C.LinkBtn href={''} target='_blank'>Резюме</C.LinkBtn>
                <S.Phone>
                    <C.LinkBtn href={`tel:${candidate?.phone}`}>{candidate?.phone}</C.LinkBtn>
                    <a href={`https://t.me/${candidate?.phone}`}><S.Messenger><Telegram/></S.Messenger></a>
                    <a href={`https://wa.me/${candidate?.phone}`}><S.Messenger><WatsApp/></S.Messenger></a>
                </S.Phone>
                <S.Form>
                    <label htmlFor="">Статус</label>
                    <S.Select name="" id="" >
                        {Object.keys(CANDIDATE_STATUS).map((key) => (
                            <option value={key} key={key}>{CANDIDATE_STATUS[key]}</option>
                        ))}
                    </S.Select>
                    <label htmlFor="">Комментарии</label>
                    <S.Textarea name="" id="" cols={30} rows={8}></S.Textarea>
                    <C.FButton>Cохранить</C.FButton>
                </S.Form>
            </div>
        </div>
    )
}

export default Candidate
