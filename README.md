# svelte app

This project uses the [Svelte](https://svelte.dev) library. Svelte is a lighweight framework for reactive JS applications. Yes, another one of those.

## Get started

Update the src/config.js file with the URL of your Openhab server. Take some time familiarising yourself with the p[OpeenHab Rest API](https://www.openhab.org/docs/configuration/restdocs.html) and [Event Bus](https://www.openhab.org/docs/developer/utils/events.html).

If you are getting a CORS error when you try to access your OpenHab server, you can either:
• Reimplement the connectors and data parts in å server-side app or lambda functions; or
• Enable cross-origin access on your OpenHab server (standard security warnings apply, at your own risk etc). See [Additional Considerations](https://www.openhab.org/docs/configuration/restdocs.html#additional-considerations) section on the OpenHab API docs for instructions.

Install the dependencies...

```bash
npm install
```

...then start webpack:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running.
