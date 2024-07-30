import { useLocation } from 'preact-iso';

export function Header() {
  const { url } = useLocation();

  function makeNavItem(name:string, location:string) {
    if (url == location) {
      return (
        <li>
          <button class="secondary">{name}</button>
        </li>
      )
    } else {
      return (
        <li>
          <a href={location} >{name}</a>
        </li>
      )
    }
  }

  return (
    <header>
      <nav>
        <ul>
          <li><strong><h1>Battery Emulator</h1></strong></li>
        </ul>
        <ul>
          {makeNavItem("Status", "/new")}
          {makeNavItem("Settings", "/settings")}
          {makeNavItem("Events", "/events")}
          {makeNavItem("OTA Update", "/update")}
        </ul>
      </nav>
    </header>
  );
}
