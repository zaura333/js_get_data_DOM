// write your code here
var e=document.querySelectorAll(".population"),o=0,t=0;e.forEach(function(e){var r=Number(e.innerHTML.replaceAll(",",""));t+=r,o++});var r=t.toLocaleString("en-US"),n=(t/o).toLocaleString("en-US"),a=document.querySelector(".total > .total-population"),l=document.querySelector(".average > .average-population");a.innerText=r,l.innerText=n;//# sourceMappingURL=index.b129613d.js.map

//# sourceMappingURL=index.b129613d.js.map
