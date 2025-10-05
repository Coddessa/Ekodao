'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useUnit } from 'effector-react'
import { closeEkopediaMenu } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import Header from './Header'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import { $ekopediaMenuIsOpen } from '@/context/modals/state'
import { useMenuAnimation } from '@/hooks/useMenuAnimation'
import { useState } from 'react'

const EkopediaMenu = () => {
  const ekopediaMenuIsOpen = useUnit($ekopediaMenuIsOpen)
  const [activeListId, setActiveListId] = useState<number>(0)
  const { lang, translations } = useLang()
  const { itemVariants, sideVariants, popupZIndex } = useMenuAnimation(
    2,
    ekopediaMenuIsOpen
  )

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeEkopediaMenu()
    setActiveListId(0)
  }

  //const isActiveList = (id: number) => activeListId === id

  const items = [
    {
      name: translations[lang].main_menu.plants,
      id: 1,
      items: [
        {
          title: translations[lang].comparison.houseplants,
          href: '/ekopedia/plants?offset=0&type=t-shirts',
          handleCloseMenu,
        },
        {
          title: translations[lang].comparison.garden,
          href: '//ekopedia/plants?offset=0&type=long-sleeves',
          handleCloseMenu,
        },
        {
          title: translations[lang].comparison.vegetable,
          href: '/ekopedia/plants?offset=0&type=hoodie',
          handleCloseMenu,
        },
        {
          title: translations[lang].comparison.medicinal,
          href: '/ekopedia/plants?offset=0&type=outerwear',
          handleCloseMenu,
        },
      ],
      handler: () => setActiveListId(1),
    },
  ]
  return (
    <div className='catalog-menu' style={{ zIndex: popupZIndex }}>
      <div className={activeListId === 1 ? 'active' : ''}> </div>
      <AnimatePresence>
        {ekopediaMenuIsOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: '100%',
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className='catalog-menu__aside'
          >
            <div className='catalog-menu__header'>
              <Header />
            </div>
            <motion.div
              className='catalog-menu__inner'
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
            >
              <motion.button
                className='btn-reset catalog-menu__close'
                variants={itemVariants}
                onClick={handleCloseMenu}
              />
              <motion.h2
                variants={itemVariants}
                className='catalog-menu__title'
              >
                {translations[lang].main_menu.ekopedia}
              </motion.h2>
              <ul className='list-reset catalog-menu__list'>
                {items.map(({ id /*name, items, handler*/ }) => (
                  /*const buttonProps = (isActive: boolean) => ({
                    handler: handler as VoidFunction,
                    name,
                    isActive,
                  })

                  const isCurrentList = (
                    showList: boolean,
                    currentId: number
                  ) => showList && id === currentId */
                  <motion.li
                    key={id}
                    variants={itemVariants}
                    className='catalog-menu__list__item'
                  >
                    {/*
                      {!isMedia450 && (
                        <>
                          {id === 1 && (
                            <EkopediaMenuButton
                              {...buttonProps(isActiveList(1))}
                            />
                          )}
                          {id === 2 && (
                            <EkopediaMenuButton
                              {...buttonProps(isActiveList(2))}
                            />
                          )}
                          {id === 3 && (
                            <EkopediaMenuButton
                              {...buttonProps(isActiveList(3))}
                            />
                          )}
                          {id === 4 && (
                            <EkopediaMenuButton
                              {...buttonProps(isActiveList(4))}
                            />
                          )}
                        </>
                      )}
                      {!isMedia450 && (
                        <AnimatePresence>
                          {isCurrentList(isActiveList(1), 1) && (
                            <EkopediaMenuList items={items} />
                          )}
                          {isCurrentList(isActiveList(2), 2) && (
                            <EkopediaMenuList items={items} />
                          )}
                          {isCurrentList(isActiveList(3), 3) && (
                            <EkopediaMenuList items={items} />
                          )}
                          {isCurrentList(isActiveList(4), 4) && (
                            <EkopediaMenuList items={items} />
                          )}
                        </AnimatePresence>
                      )}
                      {isMedia450 && (
                        <Accordion
                          title={name}
                          titleClass='btn-reset nav-menu__accordion__item__title'
                        >
                          <ul className='list-reset catalog__accordion__list'>
                            {items.map((item, i) => (
                              <li
                                key={i}
                                className='catalog__accordion__list__item'
                              >
                                <Link
                                  href={item.href}
                                  className='nav-menu__accordion__item__list__item__link'
                                  onClick={item.handleCloseMenu}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Accordion>
                      )}
*/}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EkopediaMenu
