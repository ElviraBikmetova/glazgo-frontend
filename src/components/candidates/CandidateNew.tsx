import React, { useEffect, useState } from 'react'
import * as C from '../../styles/components'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Close } from '../../assets/images/icons/close.svg'
import * as S from './styles'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ICandidate } from '../../interfaces/ICandidate'
import vacancyApi from '../../services/VacancyService'
import candidateApi from '../../services/CandidateService'

const CandidateNew = () => {
    const navigate = useNavigate()
    const handleGoBack = () => navigate(-1)
    const {data: vacancies} = vacancyApi.useFetchVacanciesQuery()
    // const vacancies = data?.results
    const [createCandidate, {isSuccess}] = candidateApi.useCreateCandidateMutation()

    useEffect(() => {
        if (isSuccess) navigate(-1)
      }, [isSuccess, navigate])

    const {
        register,
        formState: { errors, isValid},
        handleSubmit
    } = useForm<ICandidate>({mode: 'onBlur'})

    const onSubmit: SubmitHandler<ICandidate> = async (data) => {
    await createCandidate(data)
    }

    const [isRef, setIsRef] = useState(false)

    return (
        <div>
            <S.Title>
                <C.H2>Новый кандидат</C.H2>
                <C.NButton onClick={handleGoBack}>
                    <C.SvgIconWrapper><Close/></C.SvgIconWrapper>
                </C.NButton>
            </S.Title>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="surname">Фамилия</label>
                <S.Input id='surname' {...register('surname')}/>
                <label htmlFor="name">Имя</label>
                <S.Input id='name' {...register('firstName')}/>
                <label htmlFor="otch">Отчество</label>
                <S.Input id='otch' {...register('patronymic')}/>
                <label htmlFor="birthday">Дата рождения</label>
                <S.Input type='date' id='birthday' {...register('birthday')}/>
                <label htmlFor="vacancy">Вакансия</label>
                <S.Select id="vacancy" {...register('vacancy')}>
                    <option value="0"></option>
                    {vacancies && vacancies.map(vacancy => {
                        return <option key={vacancy._id} value={vacancy._id}>{vacancy.name}</option>
                    })}
                </S.Select>
                <label htmlFor="phone">Телефон</label>
                <S.Input id='phone' {...register('phone')} />
                <label htmlFor="email">Email</label>
                <S.Input id='email' {...register('email')} />
                {/* <label htmlFor="source">Источник</label>
                <S.Input id='source' {...register('source')} /> */}
                <S.RefProgramm htmlFor="ref">
                    <S.Checkbox id='ref' type='checkbox' checked={isRef} onChange={e => setIsRef(e.target.checked)}/>
                    Реферальная программа
                </S.RefProgramm>
                {isRef &&
                <S.Ref>
                    <label htmlFor="referralProgram">Реферер</label>
                    {/* <S.Input id='referralProgram' type='number' {...register('referralProgram')} /> */}
                </S.Ref>
                }
                <label htmlFor="resume">Ссылка на резюме</label>
                {/* <S.Input id='resume' {...register('resume')} /> */}
                <label htmlFor="comment">Комментарии</label>
                {/* <S.Textarea  id="comment" {...register('comment')} cols={30} rows={8}></S.Textarea> */}
                <C.FButton>Добавить кандидата</C.FButton>
            </S.Form>
        </div>
    )
}

export default CandidateNew
