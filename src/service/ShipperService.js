export const ShipperService = {
    getShippers() {
        // return new Promise((resolve, reject) => {
        //     getAllShippers()
        //         .then((data) => {
        //             console.log(data);

        //             resolve(data.body);
        //         })
        //         .catch((err) => {
        //             reject(err);
        //         });
        // });
        return fetch('/demo/data/shippers.json').then((res) => res.json());
    }
};
