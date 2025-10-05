'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Header from '../modules/Header/Header'
import MobileNavbar from '../modules/MobileNavbar/MobileNavbar'
import Footer from '../Footer/Footer'
import { AnimatePresence, motion } from 'framer-motion'
import { $showQuickViewModal } from '@/context/modals'
import QuickViewModal from '../modules/QuickViewModal/QuickViewModal'
import { useUnit } from 'effector-react'
import { basePropsForMotion } from '@/constants/motion'
import AuthPopup from '../modules/AuthPopup/AuthPopup'
import { $openAuthPopup } from '@/context/auth/state'
import { MutableRefObject, useRef } from 'react'
import { handleCloseAuthPopup } from '@/lib/utils/common'
const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia800 = useMediaQuery(800)
  const showQuickViewModal = useUnit($showQuickViewModal)
  const openAuthPopup = useUnit($openAuthPopup)
  //const shareModal = useUnit($shareModal)
  const authWrapperRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleCloseAuthPopupByTarget = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as Element

    if (target === authWrapperRef.current) {
      handleCloseAuthPopup()
    }
  }
  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <AnimatePresence>
        {' '}
        {openAuthPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className='auth-popup-wrapper'
            onClick={handleCloseAuthPopupByTarget}
            ref={authWrapperRef}
          >
            <AuthPopup />
          </motion.div>
        )}
      </AnimatePresence>
      {!isMedia800 && (
        <AnimatePresence>
          {showQuickViewModal && (
            <motion.div
              {...basePropsForMotion}
              initial={{ opacity: 0, zIndex: 6 }}
            >
              <QuickViewModal />
            </motion.div>
          )}
        </AnimatePresence>
      )}
      <div className='' />
      <Footer />
    </>
  )
}

export default Layout
