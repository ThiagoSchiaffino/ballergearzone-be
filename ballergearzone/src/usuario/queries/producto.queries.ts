const productoQueries = {
    selectAll: 'select * from productos',
selectAllByZona:'select * from productos where zona =?',
deleteProducto: 'DELETE FROM productos where productoId=?',
//agregar quierie delete where id=?
  }

  export default productoQueries;