// assemblyboxの中に変化(へんか)が起こったら実行(じっこう)
// タグを実行欄の中に入れると実行されるjs
var target = document.getElementById('assemblybox1');
var htmlbox = document.getElementById('assemblybox2');
var cssbox = document.getElementById('assemblybox3');
var visualbox = document.getElementById('visualbox');
var styledialog = document.getElementById('styledialog');
var stylelist = document.getElementById('stylelist');
var lis;
function example() {
  if(target.childElementCount > 0){
    // htmlboxの中にhtml文章を表記する
    roop(target);
  }else{
    html_text = "";
  }
  // console.log(html_text);
  htmlbox.innerHTML = html_text;
  idlistin();
  // console.log(htmlbox.textContent);
  visualbox.innerHTML = htmlbox.textContent;
  idStyleIn();
  cssbox.innerHTML = csstext;
  document.getElementById('style').innerHTML = cssbox.textContent;
}
var mo = new MutationObserver(example);
mo.observe(target, { attributes: true, childList: true, subtree: true ,characterData: true});
