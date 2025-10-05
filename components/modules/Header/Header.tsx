'use client'
import Logo from '@/components/elements/Logo/logo'
import { useLang } from '@/hooks/useLang'
import Menu from './Menu'
import {
  addOverflowHiddenToBody,
  handleOpenAuthPopup,
} from '@/lib/utils/common'
import { openMenu } from '@/context/modals'

useLang
const Header = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <div className='header__container_left'>
          <button className='btn-reset header__burger' onClick={handleOpenMenu}>
            {translations[lang].header.menu_btn}
          </button>
          <Menu />
          <div className='header__btn--add-container'>
            <button className='btn-reset header__links__item__btn--add'>
              <span className='header__links__item__btn--add__icon' />
              <span className='header__links__item__btn--add__text'>
                {translations[lang].header.add_btn}
              </span>
            </button>
          </div>
        </div>

        <div className='header__logo'>
          <Logo />
        </div>
        <div className='header__links__container'>
          {' '}
          <ul className='header__links list-reset'>
            <li className='header__links__item'>
              <button className='btn-reset header__links__item__btn header__links__item__btn--search' />
            </li>
            <li className='header__links__item'>
              <span className='header__links__item__btn header__links__item__btn--bookmarks' />
            </li>
            <li className='header__links__item'>
              <span className='header__links__item__btn header__links__item__btn--compare' />
            </li>
            <li>
              <button
                className='btn-reset header__login'
                onClick={handleOpenAuthPopup}
              >
                <span className='header__login__img' />
                {translations[lang].header.login}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
