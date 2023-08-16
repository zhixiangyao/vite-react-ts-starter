import { useRouteError } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  const error: any = useRouteError()

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <h1 className="text-2xl">Oops!</h1>

      <p>Sorry, an unexpected error has occurred.</p>

      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
