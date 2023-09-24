<template>
  <div class="container">
    <form action="" class="box">
      <div class="main">
        <h1>Login</h1>
        <div>
          <input type="text" placeholder="Enter Username">
        </div>
        <div>
          <input type="text" placeholder="Password">
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .container {
    height: 100vh;
    width: 100vw;
  }
  .box{
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .main > div{
    margin: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .main h1{
    text-align: center;
    font-weight: bold;
  }
  .main button{
    padding: 10px;
    border-radius: 10px;
    background-color: aquamarine;
    border: none;
  }
  .main input{
    color: blueviolet;
  }
  .main input:hover{
    color: rgb(167, 154, 179);
  }
</style>