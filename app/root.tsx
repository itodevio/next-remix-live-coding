import type { LinksFunction } from "@remix-run/node";
import {
    Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from '~/styles.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="layout">
          <header className="header">
            <Link
              to="/"
              className="header-logo"
            >
              Geekie Two
            </Link>
          </header>
          <main className="page-container">
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
