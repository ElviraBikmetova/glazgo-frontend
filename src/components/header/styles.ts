import styled, { css } from "styled-components";

export const SHeader = styled.header`
    height: 64px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: ${({ theme }) => theme.order.header};
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.white};
`
export const Icons = styled.div`
    display: flex;
    column-gap: 14px;
    align-items: center;
`
export const Btn = styled.div`
    z-index: ${({ theme }) => theme.order.burger};
    :hover {
        cursor: pointer;
    }
`
export const whiteSvgIcon = css`
    path {
        fill:  ${({ theme }) => theme.colors.white};
    }
`
export const SClose = styled.div`
    ${whiteSvgIcon}
    height: 24px;
    svg {
        width: 24px;
        height: 24px;
    }
`
export const SBurger = styled.div`
    height: 24px;
    svg {
        width: 24px;
        height: 24px;
    }
`
export const SLogo = styled.div`
    height: 18px;
    :hover {
        cursor: pointer;
    }
    svg {
        width: 78px;
        height: 18px;
        ${whiteSvgIcon}
    }
`
export const NavWrapper = styled.div`
    color: ${({ theme }) => theme.colors.white};
    position: fixed;
    left: 0;
    width: 100%;
    height: 100svh;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: ${({ theme }) => theme.order.header};
    top: 64px;
    transition: top 2s;
        ul {
            border-top: 1px solid ${({ theme }) => theme.colors.white};
            display: flex;
            flex-direction: column;
            row-gap: 20px;
            padding: 24px 0;
        }
`
export const Li = styled.li`
    display: flex;
    column-gap: 16px;
    align-items: center;
`
export const IconWrapper = styled.div`
    height: 24px;
    svg {
        width: 24px;
        height: 24px;
        path {
            fill:  ${({ theme }) => theme.colors.white};
            stroke: ${({ theme }) => theme.colors.white};
        }
    }
`
export const Profile = styled.div`
    &:hover {
        cursor: pointer;
    }
`

