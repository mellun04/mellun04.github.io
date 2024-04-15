<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";
  
  let eliza = new ElizaBot();
  
  import { chat_store } from "$lib/stores";
  $: chat_string = $chat_store;
  
  import { onMount } from "svelte";
  let chat = [];
  onMount(() => {
    if(chat_string.length > 1){
      chat = JSON.parse(chat_string)
    }else{ chat = [{ user: "eliza", text: eliza.getInitial() } ] }
  });

  async function write(message) {

    var element = document.getElementById("visible");
    element.style.display = "flex"; 

    chat = [...chat, {user:"me", text:message}]

    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    chat = [...chat, {user:"eliza", text:eliza.transform(message)}]

    chat_string = JSON.stringify(chat)
    chat_store.set(chat_string)

    element.style.display = "none"
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="/pico.min.css" />

  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<div class="container">
  <h1>The therapy experience</h1>
  <div class="scrollable">
    {#each chat as message}
      <article class={message.user}>
        <span> {message.text} </span>
      </article>
    {/each}
    <article id="visible">
      <span class="circle"> </span>
      <span class="circle"> </span>
      <span class="circle"> </span>
      
    </article>
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel();
      const text = data.get("text");
      write(text);
      form.reset();
    }}
  >
    <input type="text" name="text" style="border-radius:20px"/>
    <input type="reset" on:click={()=>{
      chat = [{user: "eliza", text: eliza.getInitial()}] 
      chat_string = JSON.stringify(chat)
      chat_store.set(chat_string)
      }} id="button"/>
    
  </form>
</div>

<style>
  #button{
    border-radius: 20px;
    width: 50%;
    margin-left:25%;
  }
  .eliza{
    width: fit-content;
    border-radius: 20px;
  }
  .me{
    border-radius: 20px;
    text-align: right;
    width: fit-content;
    margin-left: auto;
    background-color: rgb(224, 255, 245);
  }
  #visible{
    width: 100px;
    height: 60px;
    padding: 0px;
    display: none;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
  }
  .circle{
    height:10px;
    width: 10px;
    border-radius: 50%;
    background-color: gray;
    margin: 3px;
    animation-name: typing;
    animation-duration: 1000ms;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
  }
  .circle:nth-child(1) { animation-delay: 0ms;  }
  .circle:nth-child(2) { animation-delay: 333ms;  }
  .circle:nth-child(3) { animation-delay: 666ms; }

  @keyframes typing{
    0% {transform: scale(1); }
    25% {transform: scale(1); }
    50% { transform: scale(1.4); }
    100% { transform: scale(1); }
  }

</style>
