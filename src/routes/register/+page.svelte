
<script>
    let submitted = false
    function handleSubmit() {
        console.log('Form submitted!');
        if(firstName && lastName && displayName && email && password){ submitted = true }
    }
    let firstName=""
    let lastName = ""
    let displayName = ""
    let email = ""
    let password = ""
</script>


<h1>Registration Form</h1>

<form action="" on:submit|preventDefault={handleSubmit}>

    <div class="questions">

        <label for="firstName">First name:
            {#if !firstName} <span class="required">*</span>  {/if}
        </label>
        <input id="firstName" type="text" bind:value={firstName}/>
        <p></p>
        
        <label for="lastName">Last name:
            {#if !lastName} <span class="required">*</span>  {/if}
        </label>
        <input id="lastName" type="text" bind:value={lastName}/>
        <p></p>
        
        <label for="displayName">Display name:
            {#if !displayName} <span class="required">*</span>  {/if}
        </label>
        <input id="displayName" type="text" bind:value={displayName}/>
        <p></p>
        
        <label for="email">Email:
            {#if !email} <span class="required">*</span>  {/if}
        </label>
        <input id="email" type="email" bind:value={email}/>
        <p></p>

        <label for="password">Password:
            {#if !password} <span class="required">*</span>  {/if}
        </label>
        <input id="password" type="password" bind:value={password}/>
        <p></p>
    
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
        grid-template-columns: repeat(1,minmax(300px,1fr));
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
    .required{
        color:red
    }
    .holder{
        display: flex;
        justify-content: center;
        margin:10px
    }

</style>