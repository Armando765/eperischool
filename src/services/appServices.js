import param from '@/param/param'

export default{

  // lecture du localStorage
  getLocal(){
    return JSON.parse(localStorage.getItem(param.titre));
  },
  // Mise à jour du localStorage
  setLocal(value){
    localStorage.setItem(param.titre, JSON.stringify(value));
  },
  // Suppression du localStorage
  removeLocal(){
    localStorage.removeItem(param.titre);
  },
}
