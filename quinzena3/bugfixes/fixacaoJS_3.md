~~~ javascript
function calculaNota(ex, p1, p2) {
  let media = 0
  media = ((ex*1)+(p1*2)+(p2*3))/6
  if (media>=9){
    return  'A'
  }
  else if ((media>=7.5)&&(media<9)){
    return 'B'
  } else if ((media<7.5)&&(media>=6)){
    return 'C'
  } else {
    return 'D'
  }
}
~~~
