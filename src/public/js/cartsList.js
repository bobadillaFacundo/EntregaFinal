document.addEventListener('DOMContentLoaded', () => {
    // Event listener para el botón 'Volver'
    document.querySelectorAll('.btn-volver').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = `http://localhost:8080/api/carts`
        })
    })

    // Event listener para el botón 'Eliminar Producto de Carrito'
    document.querySelectorAll('.btn-delete-products-carts').forEach(button => {
        button.addEventListener('click', async () => {
            const idCart = button.getAttribute("data-id23")
            const idproducto = button.getAttribute("data-products")
            try {
                await fetch(`http://localhost:8080/api/carts/${idCart}/product/${idproducto}`, {
                    method: 'DELETE'
                })
                location.reload()
            } catch (error) {
                console.error('Error:', error)
                alert('Error al eliminar producto del carrito')
            }


        })
    })

    // Event listener para el botón 'Eliminar Carrito'
    document.querySelectorAll('.btn-delete-carts').forEach(button => {
        button.addEventListener('click', async () => {
            try {
                const id = button.getAttribute('data-id32')
                await fetch(`http://localhost:8080/api/carts/${id}`, {
                    method: 'DELETE'
                })
                location.reload()
                window.location.href = `http://localhost:8080/api/carts`
            } catch (error) {
                console.error('Error:', error)
                alert('Error al eliminar carrito')
            }
        })
    })
})