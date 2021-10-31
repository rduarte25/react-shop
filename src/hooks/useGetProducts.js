import { useEffect, useState } from 'react';

import axios from 'axios';

const useGetProducts = ( API ) => {

    const [products, setProducts] = useState([]);

	useEffect(async () => {
		let response = await axios(API);

		setProducts(response.data);

	}, []);

    return products;
    
};

export default useGetProducts;