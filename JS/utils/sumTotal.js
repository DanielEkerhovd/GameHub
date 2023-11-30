
export function sumTotal(api) {

    let pricing = 0


    for (let i = 0; i < api.length; i++) {

        if (api[i].onSale === true) {
        pricing = pricing + api[i].discountedPrice;
        }

        else {
        pricing = pricing + api[i].price;
        }
    };

    return pricing;
};