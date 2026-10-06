const ProductCard=({items}) => {
  return (
    <>
    <ul>
       {
        items.map((item , index)=>(
            <li key={index}>
                name: {item.name}--[price]--[{item.price}$]--information of product [{item.info}].
            </li>
        ))
       }
    </ul>
    
    </>
  )
}
export default ProductCard