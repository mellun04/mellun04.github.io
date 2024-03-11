
<script>
    let submitted = false
    function handleSubmit() {
        console.log('Form submitted!');
        if(firstName && lastName && displayName && email && password){ submitted = true }
    }
    let firstName = ""
    let lastName = ""
    let displayName = ""
    let email = ""
    let password = ""
</script>


<h1>Registration Form</h1>

<form action="" on:submit|preventDefault={handleSubmit}>

    <div class="questions">
        
        <label for="firstName">First name:</label>
        <input id="firstName" type="test" bind:value={firstName}/>
        
        <label for="lastName">Last name:</label>
        <input id="lastName" type="text" bind:value={lastName}/>
        
        <label for="displayName">Display name:</label>
        <input id="displayName" type="text" bind:value={displayName}/>
        
        <label for="email">Email:</label>
        <input id="email" type="email" bind:value={email}/>
        
        <label for="password">Password:</label>
        <input id="password" type="password" bind:value={password}/>
    
    </div>

    <div class="holder">
        <button type="submit" style="padding:15px 60px" >Register</button>
    </div>

</form>


<div id="submitted">
    <p>Have an account? <a href="/login">Log in</a></p>
    {#if submitted}
    <p class="text"> {"Welcome "+firstName+" "+lastName+"."} </p>
    <p class="text"> {"It looks like you would like to be called "+displayName+", not very creative."} </p>
    <p class="text"> {"Your email is "+email+" and your password is "+password+" and now the chinese government knows that to."}</p>
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