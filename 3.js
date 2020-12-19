function cekPola(num){
    var doble = num*2
    var k = 1
    for(var i = 0; i<num;i++){
      var line = ''
      for(var j=0; j<doble;j++){
        if(j<=i || j>=doble-k ){
          line+='*'
        }else{
          line+=' '
        }
      }
      k++
      console.log(line)
    }
  }
  
  cekPola(10)