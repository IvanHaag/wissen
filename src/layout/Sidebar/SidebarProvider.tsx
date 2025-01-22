import { createContext, useEffect, useState } from 'react'

interface SidebarContextState {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  layout?: 'mobile' | 'desktop'
}

export const SidebarContext = createContext<SidebarContextState>({
  sidebarOpen: false,
  setSidebarOpen: () => {},
  layout: 'desktop',
})

const getLayout = () => {
  const width = window.innerWidth
  if (width <= 680) return 'mobile'
  return 'desktop'
}

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [layout, setLayout] = useState<'mobile' | 'desktop'>(getLayout())

  const handleLayout = () => setLayout(getLayout())

  useEffect(() => {
    window.addEventListener('resize', handleLayout)
    return () => window.removeEventListener('resize', handleLayout)
  }, [])

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen, layout }}>
      {children}
    </SidebarContext.Provider>
  )
}
