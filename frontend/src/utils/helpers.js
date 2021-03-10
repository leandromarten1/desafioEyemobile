// salvar carrinho no localStorage
const saveCartInLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
    return;
}