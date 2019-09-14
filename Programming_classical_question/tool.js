function checkformat(element){
    element.value = element.value.replace(/[^0-9.-]/g, '');
}