import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

const BlogListItems = () => {
  const { lang, translations } = useLang()
  return (
    <>
      <li className='nav-menu__accordion__item'>
        <Link
          href='/blog'
          // eslint-disable-next-line max-len
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title nav-menu__accordion__item__list__item__link'
        >
          {translations[lang].main_menu.blog}
        </Link>
      </li>
    </>
  )
}
export default BlogListItems
