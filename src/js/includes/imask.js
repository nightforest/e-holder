import IMask from 'imask';

const imask = () => {
    const elements = document.querySelectorAll('.phone-mask');
  
    const maskOptions = {
        mask: '+{38} (000) 000-00-00'
    };
    
    for (const element of elements) {
        const mask = IMask(element, maskOptions);
    }
}

export default imask;