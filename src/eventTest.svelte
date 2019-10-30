<script>
  import OpenhabEventManager from "./openhab/OpenhabEventManager";
  import OpenHabEvent from "./openhab/OpenHabEvent";

  let messages = [];

  export let maxHistory = 20;
  const apiEvents = new OpenhabEventManager();

  apiEvents.addEventListener("error", e => console.error(e));
  apiEvents.addEventListener("message", e => onOpenhabEvent(e));
  apiEvents.addEventListener(OpenHabEvent.THING_STATUS_INFO, e =>
    onOpenhabEvent(e)
  );
  apiEvents.addEventListener(OpenHabEvent.THING_STATUS_INFO_CHANGED, e =>
    onOpenhabEvent(e)
  );
  apiEvents.addEventListener(OpenHabEvent.THING_UPDATED, e =>
    onOpenhabEvent(e)
  );

  apiEvents.connect("http://otto.local:8080/rest/events");

  const onOpenhabEvent = e => {
    const { type, topic, payload } = e;
    messages = [
      ...messages,
      {
        type: e.type,
        topic: e.topic,
        payload: JSON.stringify(e.payload)
      }
    ]
      .reverse()
      .slice(0, maxHistory)
      .reverse();
  };
</script>

<ul>
  {#each messages as message}
    <li>
      {message.type} via {message.topic}
      <br />
      {message.payload}
    </li>
  {/each}
</ul>
