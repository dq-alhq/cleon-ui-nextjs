'use client'

import React, { useEffect } from 'react'

import { LayoutGroup, motion } from 'framer-motion'
import { IconBrandGithub, IconBrandJustd } from 'justd-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ListBox, ListBoxItem, ListBoxItemProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Button, buttonVariants, Sheet } from 'ui'

import { Logo } from '@/components/logo'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { useMediaQuery } from '@/lib/utils'

const navigations = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About',
        url: '/about'
    },
    {
        name: 'Contact',
        url: '/contact'
    }
]

export function Nav() {
    const isMobile = useMediaQuery('(max-width: 640px)')
    return (
        <nav className="sm:py-1 py-2.5 border-b bg-background">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex gap-x-8 items-center">
                        <Link href="/" className="">
                            <Logo className="size-5" />
                        </Link>
                        {!isMobile && (
                            <span className="sm:inline hidden">
                                <NavContent />
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                        <ThemeSwitcher />
                        <Link
                            target="_blank"
                            aria-label="Cleon-UI"
                            className={buttonVariants({ variant: 'outline', size: 'icon' })}
                            href="https://cleon-ui.vercel.app"
                        >
                            <Logo />
                        </Link>
                        {isMobile ? (
                            <NavResponsive />
                        ) : (
                            <Link className={buttonVariants({ variant: 'ghost' })} href="/login">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

const navStyles = tv({
    base: 'text-sm relative py-0 sm:py-4 inline-flex focus:outline-none focus-visible:text-foreground font-medium',
    variants: {
        isCurrent: {
            true: 'text-foreground',
            false: 'text-muted-foreground'
        }
    }
})

function NavResponsive() {
    const [isOpen, setOpen] = React.useState(false)
    const pathname = usePathname()
    useEffect(() => {
        setOpen(false)
    }, [pathname])
    return (
        <Sheet onOpenChange={setOpen} isOpen={isOpen}>
            <Button size="sm" variant="outline">
                Menu
            </Button>
            <Sheet.Content>
                <Sheet.Header className="text-left p-4 border-b">
                    <Sheet.Title className="text-sm flex items-center gap-2">
                        <Logo className="size-5" />
                        Next Starter
                    </Sheet.Title>
                </Sheet.Header>
                <Sheet.Body className="pt-4">
                    <NavContent />
                </Sheet.Body>
                <Sheet.Footer>
                    <ListBox
                        className="flex relative sm:flex-row flex-col sm:items-center gap-3 sm:gap-6"
                        aria-label="Auth"
                    >
                        <NavLink textValue="Login" href="/login" id="/login">
                            Login
                        </NavLink>
                    </ListBox>
                </Sheet.Footer>
            </Sheet.Content>
        </Sheet>
    )
}

function NavContent() {
    const isMobile = useMediaQuery('(max-width: 640px)')
    const id = React.useId()
    return (
        <LayoutGroup id={id}>
            <ListBox
                orientation={isMobile ? 'vertical' : 'horizontal'}
                layout={isMobile ? 'stack' : 'grid'}
                className="flex relative sm:flex-row flex-col sm:items-center gap-3 sm:gap-6"
                items={navigations}
                aria-label="Navigation"
            >
                {(item) => (
                    <NavLink
                        textValue={item.name}
                        target={['Components', 'Colors', 'Icons'].includes(item.name) ? '_blank' : undefined}
                        href={item.url}
                        id={item.url}
                    >
                        {item.name}
                    </NavLink>
                )}
            </ListBox>
        </LayoutGroup>
    )
}

interface LinkProps extends ListBoxItemProps {
    isCurrent?: boolean
    className?: string
    children: React.ReactNode
}

function NavLink({ children, className, ...props }: LinkProps) {
    const isCurrent = usePathname() === props.href
    return (
        <ListBoxItem className={navStyles({ isCurrent, className })} {...props}>
            {children}
            {isCurrent && <CurrentIndicator />}
        </ListBoxItem>
    )
}

function CurrentIndicator() {
    return (
        <motion.span
            className="h-full inset-y-0 sm:inset-auto sm:h-0.5 w-0.5 sm:w-full rounded-full bg-foreground -left-4 sm:bottom-[-5px] sm:inset-x block absolute"
            layoutId="current"
        />
    )
}
