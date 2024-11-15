import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Island, LogLevel } from '@/lib/types'
import { logEntries } from '@/lib/mock'

const logTypeInfo = {
  MEASUREMENT: { label: 'medida', color: 'bg-blue-500 hover:bg-blue-600' },
  DEATH: { label: 'muerte', color: 'bg-gray-500 hover:bg-gray-600' },
  REQUEST_DINOSAUR: {
    label: 'petición',
    color: 'bg-yellow-500 hover:bg-yellow-600',
  },
  SEND_DINOSAUR: { label: 'envío', color: 'bg-green-500 hover:bg-green-600' },
  ERROR: { label: 'error', color: 'bg-red-500 hover:bg-red-600' },
}

function Dashboard() {
  const [activeIsland, setActiveIsland] = useState<'todos' | Island>('todos')
  const [activeType, setActiveType] = useState<'todos' | LogLevel>('todos')

  const filteredLogs = logEntries.filter((log) => {
    const islandMatch = activeIsland === 'todos' || log.island === activeIsland
    const typeMatch = activeType === 'todos' || log.level === activeType
    return islandMatch && typeMatch
  })
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex h-3/4 w-3/4'>
        <Tabs
          defaultValue='todos'
          className='w-[120px] border-r'
          orientation='vertical'
        >
          <TabsList className='flex flex-col h-full justify-start gap-10 pt-14'>
            <TabsTrigger
              className='w-full'
              value='todos'
              onClick={() => setActiveType('todos')}
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              className='w-full'
              value='MEASUREMENT'
              onClick={() => setActiveType('MEASUREMENT')}
            >
              Sensores
            </TabsTrigger>
            <TabsTrigger
              className='w-full'
              value='DEATH'
              onClick={() => setActiveType('DEATH')}
            >
              Muertes
            </TabsTrigger>
            <TabsTrigger
              className='w-full'
              value='REQUEST_DINOSAUR'
              onClick={() => setActiveType('REQUEST_DINOSAUR')}
            >
              Peticiones
            </TabsTrigger>
            <TabsTrigger
              className='w-full'
              value='SEND_DINOSAUR'
              onClick={() => setActiveType('SEND_DINOSAUR')}
            >
              Envíos
            </TabsTrigger>
            <TabsTrigger value='ERROR' onClick={() => setActiveType('ERROR')}>
              Errores
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className='flex-1'>
          <Tabs
            value={activeIsland}
            onValueChange={(value) =>
              setActiveIsland(value as 'todos' | Island)
            }
            className='w-full'
          >
            <TabsList className='grid w-full grid-cols-5'>
              <TabsTrigger value='todos'>Todos</TabsTrigger>
              <TabsTrigger value='Isla 1'>Isla 1</TabsTrigger>
              <TabsTrigger value='Isla 2'>Isla 2</TabsTrigger>
              <TabsTrigger value='Isla 3'>Isla 3</TabsTrigger>
              <TabsTrigger value='Centro de Crianza'>
                Centro de Crianza
              </TabsTrigger>
            </TabsList>
            <TabsContent value={activeIsland}>
              <ScrollArea className='h-[630px] w-full rounded-md border p-4'>
                <div className='space-y-4'>
                  {filteredLogs.map((entry) => (
                    <div
                      key={entry.id}
                      className='flex items-start justify-between border-b pb-2'
                    >
                      <div>
                        <p className='text-sm font-medium'>{entry.message}</p>
                        <p className='text-xs text-gray-500'>
                          {entry.timestamp}
                        </p>
                        <p className='text-xs text-gray-500'>{entry.island}</p>
                      </div>
                      <Badge
                        variant='default'
                        className={`${
                          logTypeInfo[entry.level].color
                        } text-white`}
                      >
                        {logTypeInfo[entry.level].label}
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
