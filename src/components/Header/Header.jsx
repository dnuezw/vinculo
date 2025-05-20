import { LINKS_TO_PAGES } from './constants'

export default function Header() {
    return (
        <header>
            {LINKS_TO_PAGES.map(({link, name}) => 
               <a href={link}>{name}</a>
            )}
        </header>
    )
}