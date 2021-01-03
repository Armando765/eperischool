<template>
  <div class="politique">
    <h2>Politique de Confidentialité</h2>
    <p>Cette Politique de confidentialité précise le type d’informations que nous recueillons
      lors de votre navigation sur notre site par voie de formulaire (I), et la façon dont nous
      les utilisons.
      Eperi&School s’engage à ce que la collecte et le traitement de vos données,
      effectués à partir du site Eperi&School soient conformes aux lois et réglementations
      applicables tels que la loi Informatique et Libertés n° 78-17 du 6 janvier 1978 et la
      directive européenne 95/46/CE (Règlement Général sur la Protection des Données :
      RGPD).
    </p>
    <h2>I. Les informations collectées par voie de formulaires</h2>
    <p>Sur le site, chaque questionnaire limite la collecte des données personnelles au
      stricte nécessaire, vous indique quelles données sont obligatoires et quelles
      données sont facultatives, vous informe de vos droits et des destinataires des
      données et bénéficie d’une information claire concernant les finalités de traitement
      de ces données.</p>

    <h3>Quelles sont les données personnelles collectées ?</h3>
    <p>Lorsque vous naviguez sur notre site, nous recevons également automatiquement
      l’adresse de protocole Internet (adresse IP) de votre ordinateur, qui nous permet
      d’obtenir plus de détails au sujet du navigateur et du système d’exploitation que vous
      utilisez.</p>

    <h3>Quelles sont les personnes habilitées à traiter vos données et destinataires
      des informations ?</h3>
      <p>Vos données personnelles sont exclusivement destinées à être exploitées par
        l'équipe Eperi&School et sont stockées en France, dans les bases de données des
        serveurs de la société Eperi&School. Vos données personnelles ne sont, en aucun
        cas, vendues ou louées à des tiers.</p>

    <h3>Quels sont vos droits ?</h3>
      <p>Conformément aux dispositions de la loi Informatique et Libertés n°78-17 du 6
        janvier 1978, modifiée en 2016, vous disposez d’un droit d’accès et de rectification
        des données vous concernant ainsi que d’un droit d’opposition au traitement de vos
        données. Ces droits peuvent s’exercer en adressant un email à l’adresses suivante :
        e-peri-school@agglo-montbeliard.fr
        Vous disposez également du droit d’organiser le sort de vos données post-mortem et
        du droit d’introduire une réclamation auprès de la CNIL.</p>

    <h3>Comment protégeons-nous vos données personnelles ?</h3>
    <p>Les données personnelles recueillies sur le site sont transmises et conservées selon
      des protocoles sécurisés SSL. Des mesures de sécurité administratives, techniques
      et physiques ont été mises en place, visant à protéger les données personnelles que
      nous collectons sur ce site contre toute utilisation non autorisée, divulgation,
      modification ou suppression.</p>

    <h3>Qui contacter pour avoir plus d’informations ?</h3>
    <p>Si vous souhaitez : accéder à, corriger, modifier ou supprimer toute information
      personnelle que nous avons à votre sujet, déposer une plainte, ou si vous souhaitez
      simplement avoir plus d’informations, contactez nous à l'adresse mail suivante:
      e-peri-school@agglo-montbeliard.fr</p>
  </div>
</template>
<style scoped>
.politique {
  width: 100%;
  margin: 50px 0 0 0;
  display: flex;
  padding: 0 200px 0 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.politique > p {
  font-size: 1.2em;
}
.politique > h3 {
  align-self: flex-start;
  margin: 30px;
}


@media only screen and (max-width: 1155px) {
  .politique {
    padding: 50px;
    line-height: 1.4;
  }
  .politique > p {
    font-size: 1.3em;
    text-align: center;
  }
  h3 {
    font-size: 1.6em;
    text-align: center;
  }
}
/*
telephone
 */
@media only screen and (max-width: 380px) {
  .politique {
    padding: 20px;
    line-height: 1.4;
    margin-top: 10px;
  }
  .politique > p {
    font-size: 1em;
    text-align: center;
  }
  h2 {
    font-size: 1.3em;
    text-align: center;
  }
}
</style>
