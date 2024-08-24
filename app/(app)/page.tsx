import { Header } from '@/components/header'

import { Resources } from './resources'

export default function Home() {
    return (
        <div className="py-6">
            <Header title="Cleon UI - Next JS" description="Next.js 14 Starter Kit with Cleon UI" />
            <Resources />
        </div>
    )
}
