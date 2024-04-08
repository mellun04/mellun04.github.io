
<script>

  let red = 0
  let blue = 0
  let turn = true
  let ids = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
  const imgs = ["https://picsum.photos/id/70/367/267", "https://picsum.photos/id/88/367/267","https://picsum.photos/id/93/367/267", "/notrick.gif", "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKkXl23RaUvFNOxUFZRcpSMeptNEDHIqhWrRx7XS8yw&s", "https://www.cuponline.se/graphics/cup/teamphoto/79471-800px.jpg", "https://preview.redd.it/request-for-the-gigachad-v0-1asd8y2wid0b1.jpg?width=640&crop=smart&auto=webp&s=eeeb5f5d3aebaf465668a87d6b785b02d5d8bd52", "https://upload.wikimedia.org/wikipedia/commons/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg"]

  let cards = [];

  let flipped_index;
  let flipcount = 0;

  function reset(){
    red = 0
    blue = 0
    turn = true
    cards = [];
    flipped_index;
    flipcount = 0;

    for (let index = 0; index < 100; index++){
      let a = Math.floor(Math.random()*18)
      let b = Math.floor(Math.random()*18)
      let temp = ids[a]
      ids[a] = ids[b]
      ids[b] = temp
    }
    for (let index = 0; index < 18; index++) {
      cards.push({
        id: ids[index], 
        img:"https://www.publicdomainpictures.net/pictures/140000/nahled/grey-white-background.jpg",
        flipped: false,  
        completed: false,
      });
    }
    setTimeout(() => {cards.forEach((card)=>{card.img = imgs[card.id]})}, 500);
  }

  reset()
  
  function flip(card, i) {
    if (!card.flipped && flipcount < 2) {
      card.flipped = true
      cards = cards;
      flipcount++
      if( flipcount == 1){ flipped_index = i }
    }
    if (flipcount == 2) {
      if (cards[flipped_index].id == card.id){
        card.completed = true
        cards[flipped_index].completed = true
        cards = cards;
        if(turn){ blue++}else{red++}
      }
      setTimeout(() => {
        cards.forEach((card) => { card.flipped = card.completed; });
        flipcount = 0;
        cards = cards;
        turn = !turn
        }, 1000);
      }
  }
</script>

<h1>Memory</h1>
<main>
  <div class="row">
    {#each cards as card, i}
      <div on:click={() => { flip(card, i); }} on:keypress={() => {  flip(card, i);  }}
        class:flipped={card.flipped} class="card" >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>
  <div class="box" id="red-box"> <p>{red}</p> </div>
  <div class="box" id="blue-box"> <p>{blue}</p> </div>
  <div class="box" id="turn-box" style={turn?"right: 10px;":"left:10px"}
  on:click={()=>{turn=!turn}} on:keypress={()=>{turn=!turn}}> </div>
  <div class="box" id="reset-box" on:click={()=>{reset()}} on:keypress={()=>{reset()}}><p>RESET</p></div>
</main>

<style>
  h1{
    text-align: center;
    text-shadow:  0px 3px 2px grey;
  }

  .box{
    width: 100px;
    height: 100px;
    position: fixed;
    text-align: center;
    font-size: 30px;
    border-radius: 20px;
    border-style: solid;
    border-width: 1px;
    bottom:10px;
    box-shadow: 0px 5px 5px grey;
  }
  #red-box, #blue-box{
    z-index: 2;
  }
  #red-box {
    background-color: red;
    left: 10px;
  }
  #blue-box {
    background-color: blue;
    right: 10px;
  }
  #turn-box{
    z-index: 1;
    background-color: greenyellow;
    box-shadow: 0 0 20px 20px greenyellow;
  }
  #reset-box{
    background-color: rgb(120, 120, 120);
  }

  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:900px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:700px){
    .row{
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 1px solid black;
    border-radius: 10% 30% 50% 70%;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 5px 5px grey;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    border-radius: 50% 20% / 10% 40%;;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
    border-radius: 20px;
  }
</style>
