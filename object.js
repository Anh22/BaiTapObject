function products(Name,Brand,Price,Color,Category){
    this.Name= Name;
    this.Brand=Brand;
    this.Price=Price;
    this.Color=Color;
    this.Category=Category;

}
let author= new products('Xiaomi portable charger 20000mah','Xiaomi','428','White','Charger')
let user = new products('VSmart Active','VSmart','5487','black','Phone')
let langusges = new products('IPhone X','Apple','21490','Gray','Phone')
let set = new products('Samsung Galaxy A9','SamSung','8490','Blue','Phone')

console.log(author);
console.log(user);
console.log(langusges);
console.log(set);

// console.log(author.Name)


// 1.1 Print/log name and price of all the products out 
console.log('Name:'+ author.Name+'Price:'+author.Price)
console.log('Name:'+user.Name+'Price:'+user.Price)
console.log('Name:'+langusges.Name+'Price:'+langusges.Price)
console.log('Name:'+set.Name+'Price:'+set.Price)

// 1.2 Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users
let a = prompt('Nhap vao mot so ');
if (a ==1){
    console.log('Name: '+author.Name);
    console.log('Band: '+author.Brand);
    console.log('Price: ' +author.Price);
    console.log('Color: '+author.Color);
    console.log('Category: '+author.Category);
}
if(a==2){
    console.log('Name: '+user.Name);
    console.log('Band: '+user.Brand);
    console.log('Price: ' +user.Price);
    console.log('Color: '+user.Color);
    console.log('Category: '+user.Category);

}

if(a==3){
    console.log('Name: '+langusges.Name);
    console.log('Band: '+langusges.Brand);
    console.log('Price: ' +langusges.Price);
    console.log('Color: '+langusges.Color);
    console.log('Category: '+langusges.Category);
}

if(a==4){
    console.log('Name: '+set.Name);
    console.log('Band: '+set.Brand);
    console.log('Price: ' +set.Price);
    console.log('Color: '+set.Color);
    console.log('Category: '+set.Category);
}



// 1,3 Write a script printing/logging out the products based on category input by users
let b = prompt ('Nhap vao 1 ki tu' );
if (b = author.Category){
    console.log('Name: '+ author.Name)
    console.log('Price: '+ author.Price)
}
if (b = user.Category){
    console.log('Name: '+ user.Name)
    console.log('Price: '+ user.Price)
}
if (b = langusges.Category){
    console.log('Name: '+ langusges.Name)
    console.log('Price: '+ author.Price)
}
if (b = author.Category){
    console.log('Name: '+ langusges.Name)
    console.log('Price: '+ langusges.Price)
}




// 1.4 Add providers to each productt
 products.prototype.Providers= 'Phukienzero Dientuccc' ,'Tgdd','Tgdd','Tgdd'
products.prototype.Providers= 'Phukienzero Dientuccc','Tgdd','Tgdd','Tgdd'
author.products=Providers.products='Phukienzero Dientuccc'
user.products=Providers.products='Tgdd'
langusges.products=Providers.products='Tgdd'
set.products=Providers.products='Tgdd'
console.log(author.Providers)
 console.log(set.Providers)
 console.log(author.Name)
 console.log('Price:'+ author.Price )
 console.log(langusges.Name)
 console.log('Price:'+langusges.Price)
console.log('Provider:' + author.Providers)


////1.5 products.prototype.Providers= 'Phukienzero Dientuccc' ,'Tgdd','Tgdd','Tgdd'
let c = prompt('Nhap vao mot ki tu')
if(c!=author.Providers){
    console.log(user);
    console.log(langusges);
    console.log(set);
}


// let QuocAnh={
//     Ten: 'Quoc Anh',
//     age: 21,
//     address: 'Nam Dinh',
//     School: 'Dai Hoc Thuy Loi'
// };
// let Hoang = {
//     Ten: 'HOang',
//     age: 22,
//     address: 'Vinh Phuc',
//     School: 'FPT'
// };

// console.log('Tuoi cua Quoc Anh la: '+ QuocAnh.age);


// let b = prompt ('Nhap vao 1 ki tu' );

// if(b !== QuocAnh.age ){
//     console.log(QuocAnh.Ten);
//     console.log(QuocAnh.age);
//     console.log(QuocAnh.address);
//     console.log(QuocAnh.School);

// }

// if(b == Hoang.age){
//     console.log(Hoang.Ten);
//     console.log(Hoang.School);
//     console.log(Hoang.address);
//     console.log(Hoang.age);
// }