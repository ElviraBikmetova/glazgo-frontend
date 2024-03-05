import React, { FC, useEffect } from 'react'
import * as C from '../../styles/components'
import * as S from './styles'
import { SubmitHandler, useForm } from 'react-hook-form'
import userApi from '../../services/AuthService'
import { useNavigate } from 'react-router-dom'
import { IRegQueryData } from '../../interfaces/IReg'
import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg'
import { useAppDispatch } from '../../hooks/redux'
import { setAuth } from '../../store/redusers/authSlice'
import { ERoutes } from '../../enums/routes'
import { USER_ROLE } from '../../constants'

const Registration:FC = () => {

  const [registration, {data, error, isSuccess}] = userApi.useRegistrationMutation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      dispatch(setAuth(true))
    }
  }, [data, dispatch])

  if (data) {
    localStorage.setItem('accessToken', data.accessToken)
    // localStorage.setItem('refreshToken', data.refreshToken)
    // localStorage.setItem('role', data.user.role.toString())
  }

  const navigate = useNavigate()

  const handleGoToAuth = () => navigate(ERoutes.Authorization)

  useEffect(() => {
    if (isSuccess) navigate(ERoutes.Vacancies)
  }, [isSuccess, navigate])

  const {
    register,
    formState: { errors, isValid},
    handleSubmit
  } = useForm<IRegQueryData>({mode: 'onBlur'})

  const onSubmit: SubmitHandler<IRegQueryData> = async (data) => {
    await registration(data)
  }

  return (
    <div>
      <S.LogoWrapper>
        <Logo/>
      </S.LogoWrapper>
      <S.Title>
            <C.H2>Зарегистрироваться</C.H2>
            <div onClick={handleGoToAuth}>Войти</div>
      </S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="surname">Фамилия</S.Label>
        <S.Input id='surname' {...register('surname', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.surname && <p>{errors?.surname?.message}</p>}

        <S.Label htmlFor="firstName">Имя</S.Label>
        <S.Input id='firstName' {...register('firstName', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.firstName && <p>{errors?.firstName?.message}</p>}

        <S.Label htmlFor="patronymic">Отчество</S.Label>
        <S.Input id='patronymic' {...register('patronymic')}/>
        {errors?.patronymic && <p>{errors?.patronymic?.message}</p>}

        <S.Label htmlFor="email">Email</S.Label>
        <S.Input id='email' {...register('email', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.email && <p>{errors?.email?.message}</p>}

        {/* <S.Label htmlFor="phone">Телефон</S.Label>
        <S.Input id='phone' {...register('phone', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.phone && <p>{errors?.phone?.message}</p>} */}

        <S.Label htmlFor="role">Выберите свою роль</S.Label>
        <S.Select id='role' {...register('role', {required: 'Поле обязательно к заполнению'})}>
          {Object.keys(USER_ROLE).map((key) => (
              <option value={key} key={key}>{USER_ROLE[key]}</option>
          ))}
        </S.Select>
        {errors?.role && <p>{errors?.role?.message}</p>}

        {/* <S.Label htmlFor="username">Придумайте логин</S.Label>
        <S.Input id='username' {...register('username', {required: 'Поле обязательно к заполнению'})}/>
        {errors?.username && <p>{errors?.username?.message}</p>} */}

        <S.Label htmlFor="password1">Придумайте пароль</S.Label>
        <S.Input id='password' type="password" {...register('password', {required: 'Поле обязательно к заполнению'})} />
        {(errors?.password || error) && <p>{errors?.password?.message || 'Ошибка от апи'}</p>}

        {/* <S.Label htmlFor="password2">Повторите пароль</S.Label>
        <S.Input id='password2' type="password" {...register('password2', {required: 'Поле обязательно к заполнению'})} />
        {(errors?.password2 || error) && <p>{errors?.password2?.message || 'Ошибка от апи'}</p>} */}

        <C.FButton disabled={!isValid}>Продолжить</C.FButton>
      </S.Form>
    </div>
  )
}

export default Registration

