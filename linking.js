function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charser=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
    }
    
    function downloadTxt(){
    download("name","hehe");
   }