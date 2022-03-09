import React from 'react';
import '../assets/styles/item.scss';

const Item = ({ item }) => {
  // function to capitalize each the first letter of each word. Get from:
  // https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
 }

  return (
    <div
      className="col-12 col-sm-6 col-md-4 mb-5 d-flex align-items-stretch"
    >
      <div className="card text-center">
        <img src={`./images/${item.category}${item.brand}${item.price}.jpeg`} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{item.brand}</h5>
          <p className="card-text">{titleCase(item.name)}</p>
          <p className="card-text">${item.price}</p>
        </div>
        <div className="card-footer">
        <button type="button" className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
