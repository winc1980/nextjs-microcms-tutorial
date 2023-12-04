import Header from '@/components/Header'
import Footer from '@/components/Footer'

/* index.tsxはホームページとして表示されます。 */
export default function Home({}) {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome! Next.js x microCMS</h1>
      </main>
      <Footer />
    </>
  )
}
