# About iban validation
A small package for an iban validation field for laravel nova.

It checks in the vue file if it is an valid iban but it won't stop you from submitting the form.

### If you want to install this do the following
You need to run the following command : 
`$ composer require wotta/iban-validation`

The validation field needs to be called in the following way : 

```
IbanValidation::make('iban')
    ->sortable()
    ->rules('required', 'max:32'),
```

