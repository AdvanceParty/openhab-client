<script>
  let messages = [];
  export let maxHistory = 20;
  const evtSource = new EventSource("http://otto.local:8080/rest/events", {
    withCredentials: false
  });

  evtSource.onmessage = function(event) {
    const { topic, type, payload } = JSON.parse(event.data);
    messages = [{ topic, type }, ...messages.reverse()]
      .slice(0, maxHistory)
      .reverse();
  };
</script>

<ul>
  {#each messages as message}
    <li>{message.topic} | {message.type}</li>
  {/each}
</ul>
