// file name singular product since this encapsulates features of a single product

//const products = [];
const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) =>{
        fs.readFile(p, (err, data) =>{
            if(err){
                cb([]);
            }
            else{
            cb(JSON.parse(data));
            }
        });
}

// similar to objects in Python
module.exports = class Product{
    // analogous to def __init__()
    constructor(title){
        // analogous to self.
        this.title = title;
    }

    // function but without function keyword; this is an object's method
    save(){
        // pushing this specific object into the array
        // products.push(this);

        // const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        // // get existing array of products
        // fs.readFile(p, (err, data) =>{
        //     let products = [];
        //     // if the file does exist ie products have been added
        //     if(!err){
        //         products = JSON.parse(data);
        //     }
        //     products.push(this);
        //     fs.writeFile(p, JSON.stringify(products), (err) =>{
        //         console.log(err)
        //     });
        // });

        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) =>{
                console.log(err);
            });
        });
    }    
    // static keyword, which allows us to call this method directly on the class itself instead of a single instantiated object
    // cb is a callback function
    // without cb, this code won't work because the function will return an undefined object due to asychronous nature
    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}