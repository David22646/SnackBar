function SnackBar(text){
    var snackbar = document.createElement("DIV");
    var style = document.createElement("STYLE");
    style.innerHTML = "#snackbar {display: none; min-width: 250px; margin-left: -125px; background-color: #333;color: #fff;text-align: center;border-radius: 4px;padding: 8px 16px;position: fixed;z-index: 8;left: 50%;box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 1);bottom: 30px;}#snackbar.show {display: block; -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;animation: fadein 0.5s, fadeout 0.5s 2.5s;}@-webkit-keyframes fadein {from {bottom: 0; opacity: 0;}to {bottom: 30px; opacity: 1;}}@keyframes fadein {from {bottom: 0; opacity: 0;}to {bottom: 30px; opacity: 1;}}@-webkit-keyframes fadeout {from {bottom: 30px; opacity: 1;}to {bottom: 0; opacity: 0;}}@keyframes fadeout {from {bottom: 30px; opacity: 1;}to {bottom: 0; opacity: 0;}}";
    snackbar.id = "snackbar";
    snackbar.innerHTML = text;
    document.body.append(style);
    document.body.append(snackbar);
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000); 
}