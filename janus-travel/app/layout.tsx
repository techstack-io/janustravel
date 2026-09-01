import type { Metadata } from 'next';import './globals.css';import SiteHeader from '@/components/SiteHeader';import SiteFooter from '@/components/SiteFooter';
export const metadata:Metadata={title:{default:'Janus Travel | Chicago Travel Advisors Since 1979',template:'%s | Janus Travel'},description:'Personal travel planning from an established Chicago travel agency serving travelers since 1979.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/>{children}<SiteFooter/></body></html>}
