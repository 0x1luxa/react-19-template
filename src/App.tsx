import ReactLogo from '@/assets/react.svg'

function App() {
  return (
    <form>
      <label className="block">
        <span className="...">Email</span>
        <ReactLogo />
        <input
          type="email"
          className="peer flex size-13 flex-1 justify-around"
        />
        <p className="invisible peer-invalid:visible ...">
          Please provide a valid email address.
        </p>
      </label>
    </form>
  )
}

export default App
