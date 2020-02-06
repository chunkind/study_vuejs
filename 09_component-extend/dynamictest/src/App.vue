<template>
<div>
  <div class="header">
    <h1 class="headerText">(주) OpenSG</h1>
    <nav>
      <ul>
        <li>
          <a href="#" @click="changeMenu('home')">Home</a>
        </li>
        <li>
          <a href="#" @click="changeMenu('about')">About</a>
        </li>
        <li>
          <a href="#" @click="changeMenu('contact')">Contact</a>
        </li>
      </ul>
    </nav>
  </div>

  <!-- no cashing : 시간정보가 메뉴를 클릭할때마다 바뀜 이것은 매번 실행 된다는 뜻. -->
  <!-- <div class="container">
    <component v-bind:is="currentView"></component>
  </div> -->

  <!-- cashing : 정적인 콘텐츠라면 매번 실행되는 것은 효율적이지 않다. 이런 경우 캐싱 -->
  <!-- <div class="container">
    <keep-alive>
      <component v-bind:is="currentView"></component>
    </keep-alive>
  </div> -->

  <!-- 
    특정 컴포넌트만 캐싱하거나 캐싱하고 싶지 않다면 include, exclude 특성으로 컴포넌트들을 콤마로 구분하여 나열하면 된다.
    이때 지정된 이름이 있어야 하므로 각 컴포넌트마다 name 옵션을 부여 Home, About, Contact 컴포넌트에서 name 옵션 부여 
  -->
  <div class="container">
    <keep-alive include="about,home">
      <component v-bind:is="currentView"></component>
    </keep-alive>
  </div>

</div>
</template>
<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

export default {
  components : {Home,About,Contact},
  data(){
    return { currentView : 'home' }
  },
  methods:{
    changeMenu(view){
      this.currentView = view;
    }
  }
}
</script>
<style scoped>
.header { background-color:aqua; padding: 10px 0px 0px 0px; }
.headerText { padding: 0px 20px 0px 20px; } 
ul { list-style-type: none; margin: 0; padding: 0;
    overflow: hidden; background-color: purple;  }
li { float: left; }
li a { display: block; color: yellow; text-align: center;
    padding: 14px 16px; text-decoration: none;  }
li a:hover { background-color: aqua; color:black; }
</style>
