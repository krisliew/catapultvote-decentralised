<template>
  <div>
    <Navigation />
    <div class="Home">
      <header class="bg-primary text-white">
        <div class="container text-center">
          <h1>Catapult Vote</h1>
          <p class="lead"><b>Catapult – A new generation Blockchain Voting System</b></p>
          <br /> <br />
          <a class="btn btn-primary waves-effect border-0 btn-lg js-scroll-trigger" href="#about">Read More</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a class="btn btn-white waves-effect btn-lg border-white text-white" href="/createpoll">Create Poll</a>
        </div>
      </header>
      <About />
      <Guide />
      <Faq />
      <Contact />      
    </div>
  </div>
</template>

<script>
import Navigation from '../navigationbar'
import About from './subComponent/about'
import Guide from './subComponent/guide'
import Contact from './subComponent/contact'
import Faq from './subComponent/faq'

  export default {
    name: 'Home',
    components: {
      'Navigation':Navigation,
      'About': About,
      'Guide':Guide,
      'Contact':Contact,
      'Faq':Faq
    },
    data() {
      return {}
    },
    mounted(){
      // var theAnchor = [];
      // theAnchor.push(document.getElementById("homeNav"));
      // theAnchor.push(document.getElementById("aboutNav"));
      // theAnchor.push(document.getElementById("guideNav"));
      // theAnchor.push(document.getElementById("contactNav"));
            
      // theAnchor[0].href = "#page-top";
      // theAnchor[1].href = "#about";
      // theAnchor[2].href = "#guide";
      // theAnchor[3].href = "#contact";
    }
  }
</script>

<style scoped>
header{
  padding: 156px 0 100px;
  height: 100vh;
  background-image: url(../../assets/img/index/header.jpg);
  background-size: cover;
  background-repeat:no-repeat;
}
</style>


