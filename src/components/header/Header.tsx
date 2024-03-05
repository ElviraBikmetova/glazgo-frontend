import { useState } from 'react'
import * as C from '../../styles/components'
import MenuBurger from './MenuBurger'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import authApi from '../../services/AuthService'
import { auth, logout } from '../../store/redusers/authSlice'
import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg'
import { ReactComponent as Burger } from '../../assets/images/icons/burger.svg'
import { ReactComponent as Close } from '../../assets/images/icons/close.svg'
import * as S from './styles'
import { ERoutes } from '../../enums/routes'

const Header = () => {
  const [nav, setNav] = useState(false)
  const navigate = useNavigate()
  const handleGoToAuth = () => navigate(ERoutes.Authorization)
  const handleToggleNav = () => setNav(!nav)
  const handleGoToHome = () => navigate(ERoutes.Root)
  const { isAuth } = useAppSelector(auth)
  const dispatch = useAppDispatch()
  const [logoutUser] = authApi.useLogoutMutation()
  const handleLogOut = async () => {
      await logoutUser({})
      dispatch(logout())
  }

  let content

  if (isAuth) {
      content = <S.Profile onClick={handleLogOut}>Выйти</S.Profile>
  } else {
      content = <S.Profile onClick={handleGoToAuth}>Войти</S.Profile>
  }

  return (
    <S.SHeader>
        <C.Container>
            <MenuBurger nav={nav} handleToggleNav={handleToggleNav}/>
            <S.Header>
                <S.Icons>
                    <S.Btn onClick={handleToggleNav}>
                        {nav ? <S.SClose><Close/></S.SClose> : <S.SBurger><Burger/></S.SBurger>}
                    </S.Btn>
                    <S.SLogo onClick={handleGoToHome}>
                        <Logo />
                    </S.SLogo>
                </S.Icons>
                {content}
            </S.Header>
        </C.Container>
    </S.SHeader>
  )
}

export default Header