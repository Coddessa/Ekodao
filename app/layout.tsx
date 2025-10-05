import type { Metadata, Viewport } from 'next'
import './globalStyles/normolize.css'
import './globalStyles/globals.css'
import './globalStyles/header.css'
import './globalStyles/menu.css'
import './globalStyles/mobile-navbar.css'
import './globalStyles/footer.css'
import './globalStyles/slick-theme.css'
import './globalStyles/slick.css'
import '@smastrom/react-rating/style.css'
import './globalStyles/auth-popup.css'
import './globalStyles/cookie-popup.css'
import './globalStyles/breadcrumbs.css'
import PagesLayout from '@/components/layouts/PagesLayout'

export const metadata: Metadata = {
  title: 'Ekodao',
  description: 'Ekodao — твой проводник в мир растений',
}

export const viewport: Viewport = {
  themeColor: 'white',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PagesLayout>{children}</PagesLayout>
}
