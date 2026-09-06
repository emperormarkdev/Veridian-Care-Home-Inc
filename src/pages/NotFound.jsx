import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'

function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-32 text-center sm:px-8">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-6 text-3xl font-medium sm:text-4xl">
        We couldn't find that page.
      </h1>
      <p className="mt-4 text-muted">
        It may have moved, or the address may be incorrect.
      </p>
      <div className="mt-8">
        <Button to="/" variant="primary">
          Return Home
        </Button>
      </div>
    </section>
  )
}

export default NotFound
