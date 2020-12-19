function cekNilai (nilai){
    var lulus = 0
    var tidakLulus = 0
    var length = nilai.length
    var total = 0
    for(var i=0; i<nilai.length; i++){
        total += nilai[i]
        if(nilai[i] >= 65){
          lulus++
        }else{
          tidakLulus++
        }
    }
    var average = total/length
    console.log(`Jumlah nilai yang disubmit: ${length}`)
    console.log(`Rata-rata nilai: ${average.toFixed(1)}`)
    console.log(`Lulus: ${lulus}`)
    console.log(`Tidak lulus: ${tidakLulus}`)
}

cekNilai([20,50,65,70,80,80,30,55,75])