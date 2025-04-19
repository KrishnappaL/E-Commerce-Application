import React from 'react'

function ProductCard(items, addtocart) {
  // let ratings=4;

  return (
    <div>
    <div className="card">
      <img src={items.image} alt=" " className='prodimg' height='100px' />
      <h3 className='prodname'>{items.name}</h3>
      <p className='desc'>{items.description}</p>
      <div className='rating'>
        {
          [1, 2, 3, 4, 5].map((count) => {
            return <span key={count} style={{ color: count <= items.rating ? "#f39c12" : "#ccc" }}>
              &#9733;
              </span>;
          })
        }
      </div>
      <div className='price'>
        {items.price}
      </div>
      <div className='stock'>
        {
          items.stock < 5 ? `only ${items.stock} stock` : ""
        }
      </div>
      <button onClick={()=>addtocart(items)} className="addcart">Add to Cart</button>

    </div>
    </div>
  )

}
export default ProductCard;