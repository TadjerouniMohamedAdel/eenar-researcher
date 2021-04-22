export const linksExtractor = (text)=>{
    const expression = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
    return input.match(expression);
       
}