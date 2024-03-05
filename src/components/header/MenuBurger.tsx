import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Folder } from '../../assets/images/icons/folder.svg'
import { ReactComponent as List } from '../../assets/images/icons/list.svg'
import { ReactComponent as Envelope } from '../../assets/images/icons/envelope.svg'
import { ReactComponent as UsersThree } from '../../assets/images/icons/users-three.svg'
import { ReactComponent as Newspaper } from '../../assets/images/icons/newspaper.svg'
import { ReactComponent as Cloud } from '../../assets/images/icons/cloud.svg'
import { ReactComponent as User } from '../../assets/images/icons/user.svg'
import { ReactComponent as Settings } from '../../assets/images/icons/settings.svg'
import { ReactComponent as Help } from '../../assets/images/icons/help.svg'
import * as C from '../../styles/components'
import { ERoutes } from '../../enums/routes'
import * as S from './styles'

interface MenuBurgerProps {
    nav: boolean
    handleToggleNav: () => void
}

const MenuBurger: FC<MenuBurgerProps> = ({ nav, handleToggleNav }) => {

    return (
        <>
            {nav &&
                <S.NavWrapper>
                    <C.Container>
                        <nav>
                            <ul>
                                <S.Li>
                                    <S.IconWrapper><Folder/></S.IconWrapper>
                                    <NavLink to={ERoutes.Vacancies} onClick={handleToggleNav}>Вакансии</NavLink>
                                </S.Li>
                                <S.Li>
                                    <S.IconWrapper><UsersThree/></S.IconWrapper>
                                    <NavLink to={ERoutes.Candidates} onClick={handleToggleNav}>Кандидаты</NavLink>
                                </S.Li>
                                <S.Li><S.IconWrapper><Envelope/></S.IconWrapper>
                                    <NavLink to={ERoutes.VacancyNew} onClick={handleToggleNav}>Создать заявку</NavLink>
                                </S.Li>
                                <S.Li><S.IconWrapper><List/></S.IconWrapper>Проекты</S.Li>
                                <S.Li><S.IconWrapper><Newspaper/></S.IconWrapper>Отчеты</S.Li>
                                <S.Li><S.IconWrapper><Cloud/></S.IconWrapper>Чат</S.Li>
                                <S.Li><S.IconWrapper><User/></S.IconWrapper>Профиль</S.Li>
                                <S.Li><S.IconWrapper><Settings/></S.IconWrapper>Настройки</S.Li>
                                <S.Li><S.IconWrapper><Help/></S.IconWrapper>Поддержка</S.Li>
                            </ul>
                        </nav>
                    </C.Container>
                </S.NavWrapper>
            }
        </>
    )
}

export default MenuBurger