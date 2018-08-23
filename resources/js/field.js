Nova.booting((Vue, router) => {
    Vue.component('index-IbanValidation', require('./components/IndexField'));
    Vue.component('detail-IbanValidation', require('./components/DetailField'));
    Vue.component('form-IbanValidation', require('./components/FormField'));
})
