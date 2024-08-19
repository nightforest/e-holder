import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeUk from 'air-datepicker/locale/uk';

const airDatepicker = () => {
    new AirDatepicker('.date-input',{
        locale: localeUk,
        isMobile: true,
        autoClose: true,
        timepicker: true,
        minHours: 9,
        maxHours: 18,
        minutesStep: 5,
    });
}

export default airDatepicker;
