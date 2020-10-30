let defaultCity = '南昌';
try{
  if(localStorage.city) {
    defaultCity = localStorage.city
  }
}catch(e) {}      //兼容

export default {
  city: defaultCity
}