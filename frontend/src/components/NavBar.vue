<template>
  <div>
    <h1>Portfolio de Muriel Marchal</h1>
    <h2>Développeuse web junior</h2>
    <div id="navbar">
      <router-link :to="`/`">
        <h3>Présentation</h3>
      </router-link>
      <router-link :to="`/projetsopenclassroom`">
        <h3>Projets OpenClassroom</h3>
      </router-link>      
      <router-link :to="`/projetspersonnels`">
        <h3>Projets personnels</h3>
      </router-link>      
    </div>
    <div id="separation_barre" />
  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss">
h1 {
  margin: 0;
  padding: 10px;
  font-family: 'Niconne';
  font-size: 50px;
  color: rgb(33, 222, 222);
}

h2 {
  font-size: 35px;
}

h3 {
  &:hover {
    color : blue
  }
  &:visited {
    color: turquoise;
  }
}

#navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
}

#separation_barre {
  border: 1px solid #0c3885;
  width: 50%;
  margin: 40px auto;
}
</style>