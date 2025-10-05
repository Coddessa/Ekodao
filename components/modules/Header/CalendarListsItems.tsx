import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

const CalendarListsItems = () => {
  const { lang, translations } = useLang()
  return (
    <>
      <li className='nav-menu__accordion__item'>
        <Link
          href='/calendar'
          // eslint-disable-next-line max-len
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title nav-menu__accordion__item__list__item__link'
        >
          {translations[lang].main_menu.calendar}
        </Link>
      </li>
    </>
  )
}
export default CalendarListsItems
