// Algoritma == Kerangka berfikir sistematis secara logis untuk menyelesaikan masalah 

// let number = prompt("Masukan angka");
// if (number >= 1){
//     document.write ("positif")} else if (number <= 0){
//         document.write("negatif")
//     } 
//     else {
//         document.write("Netral")
//     }

// let sumbuX = prompt("Koordinat sumbu X?");
// let sumbuY = prompt("Koordinat sumbu Y?");

// if(sumbuX > 0 && sumbuY > 0){
//     document.write("Player berada di kanan atas")
// } else if(sumbuX > 0 && sumbuY < 0){
//     document.write("Player berada di kanan bawah")
// } else if( sumbuX < 0 && sumbuY > 0){
//     document.write("Player berada di kiri atas")
// } else if(sumbuX < 0 && sumbuY < 0){ 
//     document.write("Player berada di kiri bawah")
// } else if (sumbuX == 0 && sumbuY > 0){
//     document.write("Player berada di atas")
// } else if (sumbuX == 0 && sumbuY < 0){
//     document.write ("Player berada di bawah")
// } else if ( sumbuX > 0 && sumbuY == 0){
//     document.write("Player berada kanan")
// } else if ( sumbuX < 0 && sumbuY == 0){
//     document.write("Player berada di kiri")
// } else if( sumbuX == 0 && sumbuY == 0){
//     document.write("Player berada di tengah")
// } else {
//     document.write("Player tidak dapat ditemukan")
// }
// const Tired = () =>{

// }

// const Run = () =>{

// }

// while(!Tired){
//     Run;
// }

// // NO.2
// for (let i=1; i<=20;i++){
//     console.log(i);
// }

// // NO.3
// for (let i=1; i<=20; i++){
//     console.log(i * 5);
// }

// // No.1
// for (let i=1; i<=20; i++){
//     document.write("I'm Steve <br>");
// }

//GENAP
// for ( let i=1; i<= 10; i++){
//     console.log(i * 2)
// }


//GANJL
// for (let i=1; i<10; i++){
//     console.log(i*2-1)
// }


// let angka = prompt("Masukkan angka pertama");
// let number = prompt("Masukkan angka kedua");

// for(let i = angka; i<= number; i++){
//     console.log(i * 2)
// }

// for(let i = angka; i<=number; i++){
//     console.log(i * 2 - 1)
// }

// let kartu = [2,4,6,8,10,12]


// let ulang = prompt(" ");
// for(let i=1; i<=ulang; i++){
//     Math.floor(Math.random()* 6+1);


// switch(i){
//     case 1:
//         console.log(`Anda mendapat ${kartu[0]} kartu` );
//         break;
//     case 2:
//         console.log(`Anda mendapat ${kartu[1]} kartu` );
//         break;
//     case 3:
//         console.log(`Anda mendapat ${kartu[2]} kartu`)
//         break;
//     case 4:
//         console.log(`Anda mendapat ${kartu[3]} kartu`)
//         break;
//     case 5:
//         console.log(`Anda mendapat ${kartu[4]} kartu`)
//         break;
//     case 6:
//         console.log(`Anda mendapat ${kartu[5]} kartu` )
//         break;
// }}



//ARRAY
//sebuah cara untuk menyimpan banyak tipe data
// let arr = ['Orek', 'Opor', 'Telor Balado', 'Nasi'];

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach((food) => {
//     console.log(food)
// });

// arr.map((data) => {
//     console.log(data)
// })


//METHOD
//1. PUSH => menambahkan dari belakang
// arr.push('Indomie');
// console.log(arr)

// //2. POP => menghapus dari belakang
// arr.pop('Opor');
// console.log(arr)

// //3. SHIFt
// arr.shift();
// consol.log()

// // 4. Splice
// arr.splice(1,2);
// console.log(arr)

// let usaha = ['Gojek', 'Toko Pa Edi', 'Lazada', 'Grab', 'Uniliver','Shopee', 'Toyota'];

// usaha.map((data) => {
//     console.log(data);
// });
//usaha.push("Suzuki");
//console.log(usaha.push)


// const kartu = (lempar) =>{
//     for(let i=0; i<=lempar; i++){
//            let dadu = Math.floor(Math.random()* 6+1);
//            let kartu = [2,4,6,8,10,12];
//         switch(dadu){
//             case 1:
//                 console.log(`Anda mendapat ${kartu[0]} kartu` );
//                 break;
//             case 2:
//                 console.log(`Anda mendapat ${kartu[1]} kartu` );
//                 break;
//             case 3:
//                 console.log(`Anda mendapat ${kartu[2]} kartu`)
//                 break;
//             case 4:
//                 console.log(`Anda mendapat ${kartu[3]} kartu`)
//                 break;
//             case 5:
//                 console.log(`Anda mendapat ${kartu[4]} kartu`)
//                 break;
//             case 6:
//                 console.log(`Anda mendapat ${kartu[5]} kartu` )
//                 break;
//         }
//     }

// }
// kartu(parseInt(prompt("Masukkan angka")));

//komponen react, hooks and props, JSX



let Steve = [
    {
        days: "Senin",
        lama : 2
    },
    {
        days : "Selasa",
        lama : 2
    },
    {
        days : "Rabu",
        lama : 3 
    },
    {
        days : "Kamis",
        lama : 3
    },
    {
        days : "Jumat",
        lama : 1
    },
    {
        days : "Sabtu",
        lama : 4 
    },
    {
        days : "Minggu",
        lama : 5
    }
]

let time = Steve.filter(function(time){
    return time.lama
})

console.log(Steve)

let waktu = [2, 2, 3, 3, 1, 4, 5];
let totalWaktu=0
let totalLebih=0
for (let i = 0; i < time.length; i++){
        totalWaktu += waktu[i];

        if (waktu[i] > 2){
            totalLebih++;
        }
    }
    


console.log('Total lebih :' + totalLebih++)
console.log(`Total waktu bermain game: ${totalWaktu}`, "jam")