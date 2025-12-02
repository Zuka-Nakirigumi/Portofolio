export function getImageUrl(path){
  var URLstring = `/assets/${path}`;
  const finalpath = new URL(URLstring, import.meta.url).href;
  return finalpath;
}