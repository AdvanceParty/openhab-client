<script>
  const { openhabConfig } = require("./config.js");
  import { openhabState, test } from "./store";
  import eventStream from "./eventStream";
  import OpenhabEvent from "./openhab/OpenhabEvent.js";

  const connectOpenhabEventsToStore = (endpoint, subs) => {
    subs.map(type => eventStream.subscribeTo(OpenhabEvent[type]));
    eventStream.start(endpoint);
  };

  connectOpenhabEventsToStore(
    openhabConfig.baseUrl + openhabConfig.events.endpoint,
    openhabConfig.events.subscribe
  );

  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<pre>{JSON.stringify($openhabState, null, 2)}</pre>
