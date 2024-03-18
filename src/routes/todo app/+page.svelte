<script>

let input = ""
let uncomplete = ["hello"]
let complete = ["goodbye"]

</script>


<div class="container">
    <h1>Todo list</h1>
    
    <label for="input">Add new </label>
    <input id="input" type="text" bind:value={input}/>
    <button on:click={()=>{uncomplete.push(input); uncomplete =uncomplete}}> Add </button>
    

    <div class="layout">
        <div>
            <h1>NEW</h1>
            <ul>
                {#each uncomplete as obj, i}
                    <div class="list_obj">
                        <li> {obj} </li>
                        <button on:click={()=>{complete.push(uncomplete.splice(i,1)); complete=complete; uncomplete=uncomplete}}> Done! </button>
                    </div>
                {/each}
            </ul>
        </div>
        <div>
            <h1>COMPLETED</h1>
            <ul>
                {#each complete as obj, i}
                    <div class="list_obj">
                        <li> {obj} </li>
                        <button on:click={()=>{complete.splice(i,1); complete=complete}}> Delete </button>
                    </div>
                {/each}
            </ul>
        </div>
    </div>

</div>


<style>

    .container{
        width: 80vw;
        height: 70vh;
        background-color: darkgray;
        border-width: 10px;
        border-style:ridge;
        border-color:slategrey;
        border-radius:20px;
        padding-left: 20px;
    }
    .layout{
        display: grid;
        width: 100%;
        grid-template-columns: 50% 50%;
    }
    .list_obj{
        display:flex;
        gap:5px;
        flex-direction:row;
    }


</style>