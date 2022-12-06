<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-indent -->
<template>
  <div>
    <h2>Je me présente...<span>Muriel Marchal</span></h2>
    <div>développeuse web junior</div>
    <p>créative, minutieuse, autonome, persévérante et curieuse, j’aime découvrir de nouvelles technologies et créer, je suis disponible pour un poste de développeur web</p>
    <div>
      <div>Mes technologies</div>
      <div>
        <h3 class="categorie">Frontend</h3>
        <li>
          <ul><img src="../assets/HTML5_logo.svg.png" alt="HTML" class="imgTechno"/>
            HTML
          </ul>          
          <ul><img src="../assets/CSS3_logo.svg.png" alt="CSS"  class="imgTechno"/>
            CSS
          </ul>          
          <ul><img src="../assets/Sass_Logo.svg.png" alt="SASS"  class="imgTechno"/>
            SASS
          </ul>          
          <ul><img src="../assets/js-logo.png" alt="JavaScript"  class="imgTechno"/>
            Javascript
          </ul>          
          <ul><img src="../assets/vue.js_logo.png" alt="Vue.js"  class="imgTechno"/>
            Vue.js
          </ul>          
        </li>
      </div>
      <div>
        <h3 class="categorie">Backend</h3>
        <li>
          <ul><img src="../assets/Node.js_logo.svg.png" alt="Node.js"  class="imgTechno"/>
            Node.js
          </ul>          
          <ul><img src="../assets/expressjs.png" alt="Express"  class="imgTechno"/>
            Express.js
          </ul>          
        </li>
      </div>
      <div>
        <h3 class="categorie">Bases de données</h3>
        <li>
          <ul><img src="../assets/mongoDB.png" alt="MongoDB"  class="imgTechno"/>
            MongoDB
          </ul>          
          <ul><img src="../assets/mysql_workbench.jpg" alt="MySQL Workbench"  class="imgTechno"/>
            MySQL Workbench
          </ul>          
        </li>
      </div>
      <div>
        <h3 class="categorie">locigiels et outils</h3>
        <li>
          <ul><img src="../assets/figma_logo.png" alt="Figma"  class="imgTechno"/>
            Figma
          </ul>          
          <ul><img src="../assets/vscode-nom.png" alt="VSCode"  class="imgTechno"/>
            VisualStudio Code
          </ul>          
          <ul><img src="../assets/GitHub-Logo.jpg" alt="GitHub"  class="imgTechno"/>
            GitHub
          </ul>          
          <ul><img src="../assets/insomnia.png" alt="Insomnia"  class="imgTechno"/>
            Insomnia
          </ul>          
          <ul><img src="../assets/Blender_logo_no_text.svg.png" alt="Blender"  class="imgTechno"/>
            Blender
          </ul>          
          <ul><img src="../assets/Epic_Games_logo.svg.png" alt="Epic Game"  class="imgTechno"/>
            Epic Game
          </ul>          
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPresentation",
};
</script>

<style lang="scss">
.categorie {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

li {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px;
}

ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.imgTechno {
    width: 50px;
}
</style>