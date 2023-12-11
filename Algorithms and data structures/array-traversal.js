function traverse(array){
    let elementsForSearch = [1,2,3,4];

    for(let i = 0; i < array.length; i++){
        const checker = elementsForSearch.find(el => array[i] === el);

        if(checker){
          console.log(checker);
        }
    }
}
traverse([1,0,8,4,0,3]);