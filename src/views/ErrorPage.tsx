import { useRouteError } from 'react-router-dom'

export const ErrorPage: React.FC = () => {
  const error: any = useRouteError()

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-2xl">Oops!</h1>

      <p>Sorry, an unexpected error has occurred.</p>

      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  )
}
