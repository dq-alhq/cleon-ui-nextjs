import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About'
}

export default function Page() {
    return (
        <div className="py-6">
            <div className="container">About</div>
        </div>
    )
}
