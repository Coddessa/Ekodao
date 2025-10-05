/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import Logo from '@/components/elements/Logo/logo'
import { AllowedLangs } from '@/constants/lang'
import { setLang } from '@/context/lang'
import { $menuIsOpen, closeMenu } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Accordion from './Accordion/Accordion'
import MenuLinkItem from './Accordion/MenuLinkItem'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import BlogListItems from './BlogListItems'
import CalendarListsItems from './CalendarListsItems'

const Menu = () => {
  const [showEkopediaList, setShowEkopediaList] = useState(false)
  const [showCalendarList, setShowCalendarList] = useState(false)
  const [showBlogList, setShowBlogList] = useState(false)
  const { lang, translations } = useLang()
  const menuIsOpen = useUnit($menuIsOpen)
  const pathname = usePathname()
  const isMedia800 = useMediaQuery(800)
  const isMedia640 = useMediaQuery(640)

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  const handleRedirectToEkopedia = (path: string) => {
    if (pathname.includes('/ekopedia')) {
      window.history.pushState({ path }, '', path)
      window.location.reload()
    }

    handleCloseMenu()
  }

  const handleShowEkopediaList = () => {
    setShowEkopediaList(true)
    setShowCalendarList(false)
    setShowBlogList(false)
  }

  const handleShowCalendarList = () => {
    setShowEkopediaList(false)
    setShowCalendarList(true)
    setShowBlogList(false)
  }

  const handleShowBlogList = () => {
    setShowEkopediaList(false)
    setShowCalendarList(false)
    setShowBlogList(true)
  }

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

  const plantsLinks = [
    {
      id: 1,
      text: translations[lang].comparison.houseplants,
      href: '/ekopedia/plants?offset=0&type=houseplants',
    },
    {
      id: 2,
      text: translations[lang].comparison.garden,
      href: '/ekopedia/plants?offset=0&type=garden',
    },
    {
      id: 3,
      text: translations[lang].comparison.vegetable,
      href: '/ekopedia/plants?offset=0&type=vegetable',
    },
    {
      id: 4,
      text: translations[lang].comparison.medicinal,
      href: '/ekopedia/plants?offset=0&type=medicinal',
    },
    {
      id: 5,
      text: translations[lang].comparison.aquarium,
      href: '/ekopedia/plants?offset=0&type=aquarium',
    },
    {
      id: 6,
      text: translations[lang].comparison.decorative,
      href: '/ekopedia/plants?offset=0&type=decorative',
    },
  ]

  const careLinks = [
    {
      id: 1,
      text: translations[lang].comparison.houseplants,
      href: '/catalog/accessories?offset=0&type=bags',
    },
    {
      id: 2,
      text: translations[lang].comparison.houseplants,
      href: '/catalog/accessories?offset=0&type=headdress',
    },
    {
      id: 3,
      text: translations[lang].comparison.houseplants,
      href: '/catalog/accessories?offset=0&type=umbrella',
    },
  ]

  const fertilizersLinks = [
    {
      id: 1,
      text: translations[lang].comparison.mineral,
      href: '/catalog/souvenirs?offset=0&type=business-souvenirs',
    },
    {
      id: 2,
      text: translations[lang].comparison.organic,
      href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs',
    },
  ]

  const pestsLinks = [
    {
      id: 1,
      text: translations[lang].comparison.houseplants,
      href: '/catalog/office?offset=0&type=notebook',
    },
    {
      id: 2,
      text: translations[lang].comparison.houseplants,
      href: '/catalog/office?offset=0&type=pen',
    },
  ]

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <div className='container nav-menu__container'>
        <div
          className={`nav-menu__logo ${menuIsOpen ? 'open' : ''}`}
          onClick={handleCloseMenu}
        >
          <Logo />
        </div>{' '}
        <img
          className={`nav-menu__bg ${menuIsOpen ? 'open' : ''}`}
          src='/img/menu-bg.png'
          alt='menu background'
        />
        <button
          className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`}
          onClick={handleCloseMenu}
        />
        <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
          <button
            className={`btn-reset nav-menu__lang__btn ${
              lang === 'ru' ? 'lang-active' : ''
            }`}
            onClick={handleSwitchLangToRu}
          >
            RU
          </button>
          <button
            className={`btn-reset nav-menu__lang__btn ${
              lang === 'en' ? 'lang-active' : ''
            }`}
            onClick={handleSwitchLangToEn}
          >
            EN
          </button>
        </div>
        <ul className={`list-reset nav-menu__list ${menuIsOpen ? 'open' : ''}`}>
          {!isMedia800 && (
            <li className='nav-menu__list__item'>
              <button
                className='btn-reset nav-menu__list__item__btn'
                onMouseEnter={handleShowEkopediaList}
              >
                {translations[lang].main_menu.ekopedia}
              </button>
              <AnimatePresence>
                {showEkopediaList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset nav-menu__accordion'
                  >
                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        title={translations[lang].main_menu.plants}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list'>
                          {plantsLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToEkopedia={
                                handleRedirectToEkopedia
                              }
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        title={translations[lang].main_menu.fertilizers}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list'>
                          {fertilizersLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToEkopedia={
                                handleRedirectToEkopedia
                              }
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        title={translations[lang].main_menu.pests}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list'>
                          {pestsLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToEkopedia={
                                handleRedirectToEkopedia
                              }
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        title={translations[lang].main_menu.protection}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list'>
                          {pestsLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToEkopedia={
                                handleRedirectToEkopedia
                              }
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        title={translations[lang].main_menu.seeds}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list'>
                          {pestsLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToEkopedia={
                                handleRedirectToEkopedia
                              }
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        title={translations[lang].main_menu.design}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list'>
                          {pestsLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToEkopedia={
                                handleRedirectToEkopedia
                              }
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        title={translations[lang].main_menu.tools}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list'>
                          {careLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToEkopedia={
                                handleRedirectToEkopedia
                              }
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        title={translations[lang].main_menu.cosmetics}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list'>
                          {pestsLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToEkopedia={
                                handleRedirectToEkopedia
                              }
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        title={translations[lang].main_menu.technology}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list'>
                          {pestsLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToEkopedia={
                                handleRedirectToEkopedia
                              }
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          )}
          <li className='nav-menu__list__item'>
            {!isMedia640 && (
              <button
                className='btn-reset nav-menu__list__item__btn'
                onMouseEnter={handleShowCalendarList}
              >
                {translations[lang].main_menu.calendar}
              </button>
            )}
            {!isMedia640 && (
              <AnimatePresence>
                {showCalendarList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset nav-menu__accordion'
                  >
                    <CalendarListsItems />
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
            {!isMedia640 && (
              <AnimatePresence>
                {showCalendarList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset nav-menu__accordion'
                  >
                    <CalendarListsItems />
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
            {isMedia640 && (
              <Accordion
                title={translations[lang].main_menu.calendar}
                titleClass='btn-reset nav-menu__list__item__btn'
              >
                <ul className='list-reset nav-menu__accordion__item__list'>
                  <CalendarListsItems />
                </ul>
              </Accordion>
            )}
          </li>

          <li className='nav-menu__list__item'>
            {!isMedia640 && (
              <button
                className='btn-reset nav-menu__list__item__btn'
                onMouseEnter={handleShowBlogList}
              >
                {translations[lang].main_menu.blog}
              </button>
            )}
            {!isMedia640 && (
              <AnimatePresence>
                {showBlogList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset nav-menu__accordion'
                  >
                    <li className='nav-menu__accordion__item'>
                      <Link
                        href='/blog'
                        // eslint-disable-next-line max-len
                        className='nav-menu__accordion__item__link nav-menu__accordion__item__title nav-menu__accordion__item__list__item__link'
                      >
                        {translations[lang].main_menu.blog}
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
            {!isMedia640 && (
              <AnimatePresence>
                {showBlogList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset nav-menu__accordion'
                  >
                    <BlogListItems />
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
            {isMedia640 && (
              <Accordion
                title={translations[lang].main_menu.blog}
                titleClass='btn-reset nav-menu__list__item__btn'
              >
                <ul className='list-reset nav-menu__accordion__item__list'>
                  <BlogListItems />
                </ul>
              </Accordion>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Menu
