function checkout(kode,diskon){
    var KD0023 = {
        NamaBarang : "Laptop Asus ROG",
        Harga : 15000000
    }
    var C42212 = {
        NamaBarang : "Iphone 12",
        Harga : 12000000
    }
    var D90312 = {
        NamaBarang : "Xiaomi Pocophone",
        Harga : 7000000
    }
    var H12020 = {
        NamaBarang : "Playstation 5",
        Harga : 15000000
    }
    
    var kCount = 0
    var cCount = 0
    var dCount = 0
    var hCount = 0

    for(var i=0; i<kode.length;i++){
      switch(kode[i]){
        case 'KD0023':
          kCount++
          break
        case 'C42212':
          cCount++
          break
        case 'D90312':
          dCount++
          break
        case 'H12020':
          hCount++
          break  
      }
    }

    var itemString = ''
    if(kCount>0){
      itemString += `${KD0023.NamaBarang} | ${kCount} Pcs | ${kCount*KD0023.Harga} \n`
    }
    if(cCount>0){
      itemString += `${C42212.NamaBarang} | ${cCount} Pcs | ${cCount*C42212.Harga} \n`
    }
    if(dCount>0){
      itemString += `${D90312.NamaBarang} | ${dCount} Pcs | ${dCount*D90312.Harga} \n`
    }
    if(hCount>0){
      itemString += `${H12020.NamaBarang} | ${hCount} Pcs | ${hCount*H12020.Harga} \n`
    }
    
    var Subtotal = 0
    Subtotal = (kCount*KD0023.Harga)+
               (cCount*C42212.Harga)+
               (dCount*D90312.Harga)+
               (hCount*H12020.Harga)
    Discount = (10/100)*Subtotal
    
    var total = Subtotal-Discount

    console.log(`Item yang dibeli`)
    console.log(`==================================`)
    console.log(`${itemString} `)
    console.log(`==================================`)
    console.log(`Subtotal : ${Subtotal} `)
    console.log(`Diskon   : ${Discount}`)
    console.log(`==================================`)
    console.log(`TOTAL    : ${total}`)

}

checkout(['KD0023', 'KD0023','H12020'], 10);