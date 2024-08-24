import { Link } from 'ui'

import { Logo } from '@/components/logo'
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center bg-muted/20 justify-center min-h-svh">
            <div className="absolute right-4 top-4">
                <ThemeSwitcher />
            </div>
            <div className="max-w-lg mx-auto w-full">
                <Link href="/" className="mx-auto size-10 rounded grid place-content-center mb-6">
                    <Logo className="size-10" />
                </Link>
                {children}
            </div>
        </div>
    )
}
