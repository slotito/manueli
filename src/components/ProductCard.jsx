
export function ProductCard({ title, price, category, discountPercentage, image}) {
    return (


<div className="product">
    <div className="product-img">
        <img src={image} alt="" />
        <div className="product-label">
            <span className="sale">-{discountPercentage}%</span>
            <span className="new">NUEVO</span>
        </div>
    </div>
    <div className="product-body">
        <p className="product-category">{category}</p>
        <h3 className="product-name"><a href="#">{title}</a></h3>
        <h4 className="product-price">$ {price} <del className="product-old-price">${(price / (1-discountPercentage/100)).toFixed(0 )}</del></h4>
        <div className="product-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <div className="product-btns">
            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
        </div>
    </div>
    <div className="add-to-cart">
        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
    </div>
</div>

)}

