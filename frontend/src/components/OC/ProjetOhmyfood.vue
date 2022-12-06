<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/html-indent -->
<template>
  <div>
    <h2>Projet Ohmyfood</h2>
    <div>Troisième projet de la formation développeur web d'OpenClassroom</div>
    <div>
      <p>
        Ohmyfood! est une entreprise de commande de repas en ligne. Notre
        concept permet aux utilisateurs de composer leur propre menu et réduire
        leur temps d’attente dans les restaurants car leur menu est préparé à
        l’avance. Plus de perte de temps à consulter la carte ! Nous souhaitons
        proposer à nos clients les menus de restaurants gastronomiques.
        Développé à New-York dans un premier temps, nous souhaitons désormais
        élargir notre concept à la capitale de la gastronomie : Paris.
      </p>
      <p>
        Identité graphique polices : logo et titre : Shrikhand texte : Roboto
      </p>
      <div>Couleurs</div>
      <li>
        <ul>
          primaire : #9356DC
        </ul>
        <ul>
          secondaire : #FF79DA
        </ul>
        <ul>
          tertiaire : #99E2D0
        </ul>
      </li>
      <div>Technologies :</div>
      <li>
        <ul>
          le développement devra se faire en CSS, sans Javascript.
        </ul>
        <ul>
          Aucun framework ne devra être utilisé, en revanche l'utilisation de
          SASS serait un plus.
        </ul>
        <ul>
          Aucun code CSS ne devra être appliqué via un attribut style dans une
          balise HTML.
        </ul>
      </li>
      <p>
        La cible étant les personnes connectées et pressées, le site sera
        développé en utilisant l'approche mobile-first. Pour cette raison,
        seules des maquettes mobiles seront réalisées. Sur tablette et desktop,
        le site devra s'adapter, mais ces supports n'étant pas prioritaires,
        leur mise en page est libre.
      </p>
      <div>Contenu des pages :</div>
      <div>Page d'accueil</div>
      <li>
        <ul>
          Affichage de la localisation des restaurants. A terme, il sera
          possible de choisir sa localisation pour trouver des restaurants
          proches d'un certain lieu.
        </ul>
        <ul>
          Une courte présentation de l'entreprise.
        </ul>
        <ul>
          Une section contenant les 4 menus sous forme de cartes. Au clic sur la
          care, l'utilisateur est redirigé vers la page du menu.
        </ul>
      </li>
      <div>Pages de menu</div>
      <li>
        <ul>
          4 pages contenant chacune le menu d'un restaurant.
        </ul>
      </li>
      <div>Footer</div>
      <li>
        <ul>
          le footer est identique sur toutes les pages.
        </ul>
        <ul>
          Au clic sur "Contact", un renvoi vers une adresse mail est effectué.
        </ul>
      </li>
      <div>Header</div>
      <li>
        <ul>
          Le header est présent sur toutes les pages.
        </ul>
        <ul>
          Sur la page d'accueil, il contient le logo du site.
        </ul>
        <ul>
          Sur les pages de menu, il contient en plus un bouton de retour vers la
          page d'accueil.
        </ul>
      </li>
      <div>effets graphiques et animations :</div>
      <li>
        <ul>
          Les effets accessibles au clic ou au survol sont visibles sur la
          maquette. Ils devront utiliser les animations ou transitions CSS, pas
          de Javascript, ni de librairie.
        </ul>
      </li>
      <div>Boutons</div>
      <li>
        <ul>
          Au survol, la couleur de fond des boutons principaux devra légèrement
          s'éclaircir.
        </ul>
        <ul>
          L'ombre portée devra également être plus visible.
        </ul>
        <ul>
          A terme, les visiteurs pourront sauvegarder leurs menus préférés. Pour
          ça, un bouton "J'aime" en forme de coeur est présent sur la maquette.
          Au clic, il devra se remplir progressivement. Pour cette première
          version, l'effet peut apparaître au survol sur le desktop au lieu du
          clic.
        </ul>
      </li>
      <div>Page d'accueil</div>
      <li>
        <ul>
          Quand l'application aura plus de menus, un "loading spinner" sera
          nécessaire. Sur cette maquette, un aperçu est demandé. Il devra
          apparaître pendant 1 à 3 secondes quand on arrive sur la page
          d'accueil, couvrir l'intégralité de l'écran, et utiliser les
          animations CSS (pas de librairie). Le design de ce loader n'est pas
          défini, toute proprosition est donc la bienvenue tant qu'elle est
          cohérente avec la charte graphique du site.
        </ul>
      </li>
      <div>Pages de menu</div>
      <li>
        <ul>
          A l'arrivée sur la page, les plats devront apparaître progressivement
          avec un léger décalage dans le temps. Ils pourront soit apparaître un
          par un, soit par groupe "Entrée", "Plat" et "Dessert". Un exemple de
          l'effet attendu est fourni. Le visteur peut ajouter les plats qu'il
          souhaite à sa commande en cliquant dessus. Cela fait apparaître une
          petite coche à droite du plat. Cette coche devra coulisser de la
          droite vers la gauche. Pour cette première version, l'effet peut
          apparaître au survol sur desktop au lieu du clicc. Si l'intitulé du
          plat est trop long, il devra être rogné avec deds points de
          suspension. Un exemple de l'effet attendu est fourni.
        </ul>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjetOhmyfood",
};
</script>

<style lang="scss"></style>