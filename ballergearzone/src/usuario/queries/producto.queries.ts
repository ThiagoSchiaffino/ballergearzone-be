const productoQueries = {
    selectAll: 'select * from productos',
selectAllByZona:'select * from productos where zona =?',
deleteProducto: 'DELETE FROM productos where productoId=?',
getVentas: 'select * from registroDeVentas r join usuarios u on r.usuarioID = u.usuarioID join productos p on r.productoId = p.productoId '
//agregar quierie delete where id=?
  }

  export default productoQueries;