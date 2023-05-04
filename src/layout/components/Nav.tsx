import GithubOctopusCat from '/@/components/GithubOctopusCat'

interface NavProps {
  children: {
    title?: React.ReactNode
    default?: React.ReactNode
    info?: React.ReactNode
  }
}

const Nav: React.FC<NavProps> = ({ children }) => (
  <nav className="bg-gray-800 fixed top-0 left-0 w-screen z-10">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16 overflow-x-auto overflow-y-hidden">
        <div className="text-green-600 flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium">
          {children?.title ?? 'null'}
        </div>

        <div className="hidden sm:hidden md:hidden lg:flex xl:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="sm:block sm:ml-6">
            <div className="flex space-x-4 select-none">{children?.default ?? 'null'}</div>
          </div>
        </div>

        <div className="hidden sm:hidden md:hidden lg:flex xl:flex text-blue-600 flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium">
          {children?.info ?? 'null'}
        </div>
      </div>
    </div>
    <GithubOctopusCat />
  </nav>
)

export default Nav
