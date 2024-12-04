import { AppScreen } from '@/lib/types'
import { FolderGit2, List, LogOut, Map, Volume1, Volume2 } from 'lucide-react'
import { SetStateAction } from 'react'

interface NavBarProps {
  increaseVolumeLevel: () => void
  decreaseVolumeLevel: () => void
  activeScreen: AppScreen
  changeScreen: (value: SetStateAction<AppScreen>) => void
  logoutUser: () => void
}

export default function NavBar({
  increaseVolumeLevel,
  decreaseVolumeLevel,
  activeScreen,
  changeScreen,
  logoutUser,
}: NavBarProps) {
  return (
    <div className='z-20'>
      <div className='absolute w-32 top-12 right-10 flex justify-center items-center gap-4 bg-white p-2 rounded-xl bg-opacity-90'>
        <button
          onClick={decreaseVolumeLevel}
          className='p-2 hover:bg-gray-200 rounded-full'
        >
          <Volume1 size={26} />
        </button>
        <button
          onClick={increaseVolumeLevel}
          className='p-2 hover:bg-gray-200 rounded-full'
        >
          <Volume2 size={26} />
        </button>
      </div>

      <div className='absolute h-3/4 w-32 top-36 right-10 flex flex-col justify-around items-center bg-white p-4 rounded-2xl bg-opacity-90 shadow-lg'>
        <button
          onClick={() => changeScreen(AppScreen.MAP)}
          className={`p-3 rounded-full ${
            activeScreen === AppScreen.MAP
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-200'
          }`}
        >
          <Map size={28} />
        </button>
        <button
          onClick={() => changeScreen(AppScreen.LOGS)}
          className={`p-3 rounded-full ${
            activeScreen === AppScreen.LOGS
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-200'
          }`}
        >
          <List size={28} />
        </button>
        <button
          onClick={() =>
            window.open(
              'https://github.com/dacalite/p3-jurassic-park',
              '_blank'
            )
          }
          className='p-3 rounded-full hover:bg-gray-200'
        >
          <FolderGit2 size={28} />
        </button>
        <button
          onClick={logoutUser}
          className='p-3 rounded-full hover:bg-red-300'
        >
          <LogOut size={28} />
        </button>
      </div>
    </div>
  )
}
