import { FC, useEffect, useState } from 'react'
import * as S from './styles'
import * as C from '../../styles/components'
import { ReactComponent as Close} from '../../assets/images/icons/close.svg'
import { useNavigate, useParams } from 'react-router-dom'
import vacancyApi from '../../services/VacancyService'
import { REASON, SCHEDULE, VACANCY_STATUS } from '../../constants'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IVacancy } from '../../interfaces/IVacancy'
import candidateApi from '../../services/CandidateService'
import { formatDate } from '../../utils'
import { ERoutes } from '../../enums/routes'

const Vacancy: FC = () => {
    const {id} = useParams()
    const {data: vacancy} = vacancyApi.useFetchVacancyQuery(id ? id : '')
    const [updateVacancy] = vacancyApi.useUpdateVacancyMutation()
    const navigate = useNavigate()
    let status: string | undefined, customer, recruiter, date
    if (vacancy) {
        status = vacancy.status
        // customer = vacancy.customer
        // recruiter = vacancy.recruter
        // date = formatDate(vacancy.dateCust)
    }

    const {data: candidates} = candidateApi.useFetchVacancyCandidatesQuery(id ? id : '')
    // const candidates = data?.results

    const handleGoToBack = () => {
        navigate(ERoutes.Root + ERoutes.Vacancies)
    }
    const handleGoToCandidates = () => {
        navigate(`/${ERoutes.Vacancies}/${id}/candidates`)
    }

    const {
        register,
        formState: { errors, isValid},
        handleSubmit,
        reset
    } = useForm<IVacancy>({
        mode: 'onBlur',
        defaultValues: {
            salary: vacancy?.salary,
            status,
        }
    })

    useEffect(() => {
        reset({
          city: vacancy?.city,
          salary: vacancy?.salary,
          schedule: vacancy?.schedule,
          reason: vacancy?.reason,
          status,
        });
      }, [reset, vacancy, status]);

    const onSubmit: SubmitHandler<IVacancy> = async (vacancy) => {
    // await login(data)
        setIsChange(!isChange)
        updateVacancy({vacancy, id})
    }

    const [isChange, setIsChange] = useState(false)

    const handleChange = () => {
        setIsChange(!isChange)
    }

    const handleCancel = () => {
        setIsChange(false)
        reset()
    }

    const handleCloseVacancy = () => {
        navigate(`/${ERoutes.VacancyClosed}/${id}`)
    }

    new Array(10).map((item, index) => console.log('index', index))

    return (
      <div>
            <div>
                <S.Title>
                    <C.H2>Вакансия</C.H2>
                    <C.NButton onClick={handleGoToBack}>
                        <C.SvgIconWrapper><Close/></C.SvgIconWrapper>
                    </C.NButton>
                </S.Title>
                <S.VacancyName>{vacancy?.name}</S.VacancyName>
            </div>
            <S.Head>
                <div>
                    <p>Создана</p>
                    <p>{date}</p>
                </div>
                <div>
                    <p>ID</p>
                    <p>{id}</p>
                </div>
            </S.Head>
            <S.Info>
                    <S.AutoItem>
                        <p>Заказчик:</p>
                        <p></p>
                    </S.AutoItem>
                <S.AutoItem>
                    <p>Рекрутер:</p>
                    <p></p>
                </S.AutoItem>
                {/* <S.AutoItem>
                    <p>Компания:</p>
                    <p></p>
                </S.AutoItem> */}
            </S.Info>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="city">Город</label>
                <S.Input id="city" disabled={!isChange} {...register('city')}/>

                <label htmlFor="salary">Зарплата</label>
                <S.Input id="salary" type="number" disabled={!isChange} {...register('salary')}/>

                <label htmlFor="schedule">График</label>
                <S.Select id="schedule" disabled={!isChange} {...register('schedule')}>
                    {Object.keys(SCHEDULE).map((key) => (
                        <option value={key} key={key}>{SCHEDULE[key]}</option>
                    ))}
                </S.Select>

                <label htmlFor="reason">Причина открытия вакансии</label>
                <S.Select id="reason" disabled={!isChange} {...register('reason')}>
                    {Object.keys(REASON).map((key) => (
                        <option value={key} key={key}>{REASON[key]}</option>
                    ))}
                </S.Select>

                <label htmlFor="candidate">Выбранный кандидат</label>
                {/* <S.Select id="candidate" disabled={!isChange} {...register('candidate')}>
                    <option value="0"></option>
                    {candidates && candidates.map((candidate) => (
                        <option value={candidate.candidatId.id} key={candidate.candidatId.id}>{candidate.candidatId.surname} {candidate.candidatId.name} {candidate.candidatId.otch}</option>
                    ))}
                </S.Select> */}

                <label htmlFor="status">Статус</label>
                <S.Select id="status" disabled={!isChange} {...register('status')}>
                    {Object.keys(VACANCY_STATUS).map((key) => (
                        <option value={key} key={key}>{VACANCY_STATUS[key]}</option>
                    ))}
                </S.Select>

                {isChange &&
                <S.FormButtons>
                    <C.FButton>Сохранить</C.FButton>
                    <C.FButton type="reset" onClick={handleCancel}>Отменить</C.FButton>
                </S.FormButtons>}
            </S.Form>

            <S.Buttons>
                {!isChange && <C.FButton onClick={handleChange}>Изменить вакансию</C.FButton>}
                <C.FButton onClick={handleCloseVacancy}>Закрыть вакансию</C.FButton>
                {candidates && candidates?.length > 0 && <C.LButton onClick={handleGoToCandidates}>Кандидаты</C.LButton>}
                <C.LButton>Чат с рекрутером</C.LButton>
            </S.Buttons>
        </div>
    )
}

export default Vacancy
