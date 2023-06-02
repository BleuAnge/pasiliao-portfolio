import './css/globals.css'
import PageWrapper from './PageWrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
          <PageWrapper>
            {children}
          </PageWrapper> 
        </body>
    </html>
  )
}
