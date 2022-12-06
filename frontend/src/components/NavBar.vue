<template>
  <div>
    <h1>Portfolio de Muriel Marchal</h1>
    <div>Développeuse web junior</div>
    <li>
      <router-link :to="{ name : MyPresentation}">
        <ul>Présentation</ul>
      </router-link>
      <router-link :to="{ name : OCProjets}">
        <ul>Projets OpenClassroom</ul>
      </router-link>      
      <router-link :to="{ name : PersonalProjets}">
        <ul>Projets personnels</ul>
      </router-link>      
    </li>
  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lng="scss">

</style>