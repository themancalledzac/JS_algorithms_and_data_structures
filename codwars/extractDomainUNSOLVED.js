function domainName(url) {
  //your code here
  array = url.split("http://");
  console.log(array);
}

console.log(domainName("http://google.com")); // "google"
console.log(domainName("http://google.co.jp")); // "google"
console.log(domainName("www.xakep.ru")); // "xakep"
