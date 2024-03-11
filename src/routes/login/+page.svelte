<script>
    let submitted = false
    function handleSubmit() {
        console.log('Form submitted!');
        if(email && password){ submitted = true }
    }
    let email = ""
    let password = ""
</script>


<h1>Login</h1>

<form action="" on:submit|preventDefault={handleSubmit}>

    <div class="questions">
        
        <label for="email">Email:</label>
        <input id="email" type="email" bind:value={email}/>
        
        <label for="password">Password:</label>
        <input id="password" type="password" bind:value={password}/>
        
    </div>
    
    <div class="holder">
        <button type="submit" style="padding:15px 60px" >Login</button>
    </div>

</form>


<div id="submitted">
    <p>Don't have an account? <a href="/register">Register</a></p>
    {#if submitted}
        <p class=text> Welcome back!</p>
    {/if}
</div>

<style>

    form{
        display: grid;
        width: 60vw;
        max-width: 500px;
        margin:auto;
    }
    .questions{
        display: grid;
        grid-template-columns: repeat(2,minmax(300px,1fr));
        
    }
    #submitted{
        display: grid;
        width: 60vw;
        max-width: 500px;
        min-height: 40px;
        margin:auto;
    }
    .text{
        margin: 5px;
    }
    .holder{
        display: flex;
        justify-content: center;
        margin:10px
    }

</style>