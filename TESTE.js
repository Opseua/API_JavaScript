function teste(inf1){
    var inf1 = inf1.replaceAll('fetch', 'axios');
    var inf1 = inf1.replaceAll('"body"', '"data"');
    console.log(inf1)
}
teste(': "body"] : fetch(inf')