<script setup>
import {ref} from "vue";

const showModel = ref(false)


</script>

<template>
  <main>
    <div v-if="showModel" class="overlay">
      <div class="model">
        <textarea name="note" id="note" cols="30" rows="10"></textarea>
        <button>Add Note</button>
        <button @click="showModel=false" class="close">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModel=true">+</button>
      </header>
      <div class="cards-container">
        <div class="card">
          <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore, enim alias rem error ratione sunt a sapiente impedit nulla consequuntur iusto nam suscipit ea odio id! Rerum, et itaque.</p>
          <p class="date">02/12/1212</p>
        </div>
        <div class="card">
          <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore, enim alias rem error ratione sunt a sapiente impedit nulla consequuntur iusto nam suscipit ea odio id! Rerum, et itaque.</p>
          <p class="date">02/12/1212</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main{
    height: 100vh;
    width: 100vw;
  }
  .container{
    max-width: 1000px;
    padding: 10ox;
    margin: 0 auto;
  }

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1{
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

  header button{
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21,20,20);
    border-radius: 100%;
    color: white;
  }

  .card{
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .date{
    font-size: 12.5px;
    font-weight: bold;
  }

  .cards-container{
    display: flex;
    flex-wrap: wrap;
  }

  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .model{
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .model button{
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
  }
  .model .close{
    background-color: red;
    margin-top: 7px;
  }
</style>
