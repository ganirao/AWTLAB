function Rating()
{
  var request = new XMLHttpRequest();
  var movie = document.getElementById("temp").value;
  
  //var movie="Pushpa"
   var url=
   "https://imdb-api.com/en/API/FullCast/k_oj69yipo/"+movie
   request.open('Get',url)
   request.onload=function(){
       var result=JSON.parse(this.response)
       console.log(result);
      document.getElementById("result").value=result.directors.items[0].name
    }
   request.send();
   //console.log("Fetching")
}