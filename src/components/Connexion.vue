<template>
    <div class="connexion">
      <img src="../assets/img/enfantseule2.png" alt="">
      <form action="/" method="post">
        <p>Veuillez vous connecter</p>
        <div>
          <label>Nom d'utilisateur</label>
          <b-input type="text"  required/>
        </div>
        <div>
          <label>Mot de passe</label>
          <b-input type="password" required/>
        </div>
        <div class="button">
          <button type="submit">Se connecter</button>
        </div>
      </form>
      <img src="../assets/img/enfantseule.png" alt="">
    </div>
</template>

<style scoped>
.connexion {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
form {
  /* Uniquement centrer le formulaire sur la page */
  width: 400px;
  /* Encadré pour voir les limites du formulaire */
  padding: 1em;
  background-color: #44B7AA;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
form > p {
  font-size: 1.4em ;
}
form div + div {
  margin-top: 1em;
}

label {
  /* Pour être sûrs que toutes les étiquettes ont même taille et sont correctement alignées */
  display: inline-block;
  width: 150px;
  font-size: 1.2em;
}

input {
  text-align: center;
  /* Pour s'assurer que tous les champs texte ont la même police.
     Par défaut, les textarea ont une police monospace */
  font: 1em sans-serif;

  /* Pour que tous les champs texte aient la même dimension */
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #999;
  justify-self: center;
}

button {
  background-color: #86B8B2;
  color: #373636;
  border-radius: 50px;
  font-size: 1.2em;
}
.button:hover {
  transition: .5s;
  transform: scale(1.05);
}

/*
telephone
 */
@media only screen and (max-width: 380px) {
  img {
    display: none;
  }
  form {
    width: 350px;
  }
}
</style>
