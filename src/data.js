const itemsData = [
  {
    id: 1,
    name: "AirPods",
    category: "technology",
    price: 100,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
  },
  {
    id: 2,
    name: "Iphone 14 Pro",
    category: "technology",
    price: 999,
    image:
      "https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-deep-purple-fall22-a?wid=930&hei=930&fmt=webp",
  },
  {
    id: 3,
    name: "Samsung TV",
    category: "technology",
    price: 2000,
    image:
      "https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/04032023/TU8000.jpg",
  },
  {
    id: 4,
    name: "Dog Food",
    category: "pet supplies",
    price: 20,
    image:
      "https://www.iams.com/sites/g/files/fnmzdf3396/files/migrate-product-files/images/fnsxwlpqtwp4mong0ox8.png",
  },
  {
    id: 5,
    name: "Dog Leash",
    category: "pet supplies",
    price: 10,
    image:
      "https://m.media-amazon.com/images/I/61IWek7dW7L._AC_UL800_FMwebp_QL65_.jpg",
  },
  {
    id: 6,
    name: "Dog Toy",
    category: "pet supplies",
    price: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lzLT2WF65XL2WJ8ma0U2Op1PkrPQqymMEw&usqp=CAU",
  },
  {
    id: 7,
    name: "Mighty Patch",
    category: "personal care",
    price: 3,
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hro/hro46800/l/3.jpg",
  },
  {
    id: 8,
    name: "CeraVe",
    category: "personal care",
    price: 15,
    image:
      "https://www.cvs.com/bizcontent/merchandising/productimages/large/3606000537736.jpg",
  },
  {
    id: 9,
    name: "Cologne",
    category: "personal care",
    price: 80,
    image:
      "https://www.yslbeautyus.com/on/demandware.static/-/Sites-ysl-master-catalog/default/dw7e1a6ec4/Fragrance/727YSL/727YSL/3614272050358.jpg",
  },
  {
    id: 10,
    name: "Apple Watch",
    category: "technology",
    price: 299,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1huXpEY33nYYd3dWCR_vl2_q67oDOEVuReh-2v6J9fRo4wwm1qugCmWjWWUDpdevGNBgnkp7WL5qB9H19i8UaF4T8F0dn5EQ0a8h4NSTPihY9GFT_a-OCNcYH8ilMqIooIBA&usqp=CAc",
  },
  {
    id: 11,
    name: "Oranges",
    category: "grocery",
    price: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSVho5LoS7NE_PRobdQEIjx-XEtsGXjkK8mwKNfgtD7Bzcnvq0F7c2RAyDvJ5Xdn7Xf8CHFEdOCzX7l50FnAxGvyoViP0w9kwR-aOSw_wHFS5EzXyttZVxYnPwn2UH9I_e3Dw&usqp=CAc",
  },
  {
    id: 12,
    name: "Legos",
    category: "toy",
    price: 29.99,
    image:
      "https://m.media-amazon.com/images/I/817izap8AML._AC_SX679_.jpg",
  },
  {
    id: 13,
    name: "Play-Doh",
    category: "toy",
    price: 2.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnNT2BqtO0NqvD4wjiU9-6UZUcopMlvWl6yaHo1IRmNYH4lMk382w8lZ2ek3fHHYgmTU&usqp=CAU",
  },
  {
    id: 14,
    name: "White Shirt",
    category: "clothes",
    price: 4.99,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS859X2oJYSIT2DfDT0gYD6F-yvox-fRnjaYzEgBI2wc7U2NQHVaMrPzezkipRiatC_S59uUw6EjR7s_tTCUcgKAWkqjU5K1XjgIpL3m6ViBGjwYDvABquGnDR7kXuvPU9aNMU&usqp=CAc",
  },
  {
    id: 15,
    name: "Milk",
    category: "grocery",
    price: 3.99,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQSQ42UaYO6UhyhzwCbgp20e_UGHo6EQZODyP0zBFqLKYEs_SZI6fXVqZkDsSo4FcuCizI8RfrU4f2_uAzaTOEgnlrHWhn8u7rAKyEcyZShuNLWq9dFPuZhJ29c5pD4BKyIof7N&usqp=CAc",
  },
  {
    id: 16,
    name: "PS5",
    category: "technology",
    price: 499.99,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTA0VKR0M6-jcjWewxw7U2anPcjwE_WGs-KWEYEOfM-6OWvuj_B81m3y8l6blxJ3dLSkRcThFsBAI7DTT31P8Ij8gJPoKT2-w",
  },
  {
    id: 17,
    name: "Charger",
    category: "technology",
    price: 15.99,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSB6ccwxoPoFupUJtyw5vtZQMu1TSXnsVDa14N2--39lhq2jrUsBS0uGS4njeRypq1KAkOBykHx_mVoK2xDnNLxRvmoEKpx7NKgHaQcUpiiYYqkBUvwNgCA1kx5Z_sICZjz2Aw&usqp=CAc",
  },
  {
    id: 18,
    name: "Eggs",
    category: "grocery",
    price: 2.99,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRW-Z_svCImE776htkl6ULfr8MAOzxFPocwPEnj-SOAIYFEq1Swm-qvjbVKAtMKTOXfl7vTzNaKj6ok_P1jV0RbUMSK25o72OMj9sNXszpovt6gE64bFCzDEJ4GN-BEyPBSlw&usqp=CAc",
  },
  {
    id: 19,
    name: "Apples",
    category: "grocery",
    price: 1.99,
    image:
      "https://www.instacart.com/image-server/932x932/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_9b9e5a17-58fe-49ca-8f62-4ff0ed034f98.jpg",
  },
  {
    id: 20,
    name: "Beats Headphones",
    category: "technology",
    price: 349.99,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTjyCEQypkUtCosHeDdLtvRj5DWxqD9hC8hUAmAXP0AutRbT5_306LvegyYECf6H6B9Bd6lOjN8sJ1MbUbFawBcgG6-d45mVPHVdH3maQQZJC2Lr-LTE98xN7qN-FdXhNMKkAjf&usqp=CAc",
  },
];

export default itemsData;
