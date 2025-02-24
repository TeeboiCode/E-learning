<template>
  <div class="Container">
      <header>
          <div class="div1">
            <p class="free">Free Courses✨Sales End Soon Get it Now</p>
          </div>
          <nav>
            <ul>
                <div style="display:flex; gap:10px;">
                    <!-- <img src="../assets/Logo (1).png" alt=""> -->
                <div class="LiContainer" :class="isActive ? dropdown: ''">
                    <li class="links">Home</li>
                    <li class="links">Courses</li>
                    <li class="links">About Us</li>
                    <li class="links">Pricing</li>
                    <li class="links">Contact</li>
                </div>
                </div>
                <div class="ButtonContainer">
                    <button class="signup">Sign Up</button>
                    <button class="Login">Login</button>
                    <!-- <img class="bars" src="../assets/Vector (Stroke) (8).png" alt="" @click="showNav"> -->
                </div>
                
            </ul>
          </nav>
      </header>
    </div>
</template>

<script>
export default {
  name: "AppNavBarVue",
  data(){
       return{
        isActive: false,
        dropdown:"top"
       }
    },
    methods:{
        showNav(){
            this.isActive = !this.isActive
        }
    }
};
</script>

<style scoped>
    header{
        margin-left: 15px;
        margin-right: 15px;
    }
    .free{
      width:100%;
      color:white; 
      text-align :center;
    }
    .div1{
      border-radius: 10px;
     
      padding: 15px;
      margin-top: 20px;
      background-color: #FF9500;
    }
    .LiContainer{
        display:flex;
        align-items: center;
        gap: 20px;
    }
    .links {
    list-style-type: none;
    font-weight: 550;
    position: relative;
    display: inline-block; /* Ensures the underline fits the text */
    text-decoration: none;
    
}

.links::after {
    content: "";
    position: absolute;
    left: 50%; 
    bottom: -2px; 
    width: 0%;
    height: 2px; 
    background-color: #FF9500; 
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}

.links:hover::after {
    width: 100%;
    left: 0; /* Expand to both sides */
}
.signup{
    padding: 15px 20px 15px 20px;
    font-weight: 600;
    border-radius: 5px;
    outline: none;
    border: none;
    background: whitesmoke;
}
.Login{
    padding: 15px 20px 15px 20px;
    font-weight: 600;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #FF9500;
    color: white;
}
ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 20px 10px 20px;
}
.ButtonContainer{
    gap: 20px;
    display: flex;
}
.bars{
    height: 40px;
    width: auto;
    display: none;
}

@media (max-width: 720px) {
    .LiContainer{
        flex-direction: column;
        position: absolute;
        width:300px;
        justify-self: left;
        justify-content: left;
        background: white;
        border: 2px #FF9500 solid;
        padding: 40px;
        left: 1%;
        top: -600px;
        transition: 1s ease-in-out;
    }
    .links{
        color: #FF9500;
        font-weight: 500;
        cursor: pointer;
        
        
    }
    .bars{
        display: block;
        cursor: pointer;
    }
    .top{
    top: 10px;
}
}
</style>
