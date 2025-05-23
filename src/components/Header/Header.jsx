import { ROUTES_TO_PAGES } from './constants'

export default function Header() {

    function handleClick(route) {
        location = route;
    }

    return (
        <header>
            {ROUTES_TO_PAGES.map(({link, name}) => 
               <a href={link} onClick={() => handleClick(link)}>{name}</a>
            )}
        </header>
    )
}