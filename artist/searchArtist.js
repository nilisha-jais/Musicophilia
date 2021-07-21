 
const search_name = () => {
    let input=document.getElementById("searchbar");
    input=input.value.toLowerCase();

    let artistBlock=document.getElementsByClassName("artist-block col-lg-4 col-md-6 col-sm-12");
    let names=document.getElementsByClassName("lower-content");

    for(var i=0;i<names.length;i++) {
        let filternames=names[i].getElementsByTagName("a")[0].innerHTML;
        if(filternames.toLowerCase().indexOf(input) > -1){
            artistBlock[i].style.display="";
        }else
        {
            artistBlock[i].style.display="NONE";
        }
    }

}
   