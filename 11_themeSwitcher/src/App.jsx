import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'
import ThemeBtn from './components/ThemeBtn'
import CardUI from './components/CardUI'
import { ThemeContextProvider } from './contexts/Theme'

function App() {
  const [themeMode,setThemeMode] = useState('light')
  const lightTheme = ()=>{
    setThemeMode('light')
  }
  const darkTheme = ()=>{
    setThemeMode('dark')
  }

  //actual changein a theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
          <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
            <div className="flex flex-wrap min-h-screen items-center  dark:bg-gray-800">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <CardUI/>
                    </div>
                </div>
            </div>
          </ThemeContextProvider>
  )
}

export default App
