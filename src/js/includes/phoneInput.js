import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const phoneInput = () => {
    const tellInputAll = document.querySelectorAll(".tell-input");

    tellInputAll?.forEach(function(item) {
        intlTelInput(item, {
            initialCountry: 'auto',
			separateDialCode: true,
			nationalMode: false,
			placeholderNumberType: 'MOBILE',
            utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/23.8.1/js/utils.min.js',
			geoIpLookup: callback => {
                fetch("https://ipapi.co/json")
                  .then(res => res.json())
                  .then(data => callback(data.country_code))
                  .catch(() => callback("us"));
            },
        });
    });
}

export default phoneInput;