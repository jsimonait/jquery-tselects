# Selects Transfer jQuery Plugin #

This is a simple jQuery plugin to create a multiple select transfer 

## Requirements

* jQuery 1.6+

## Tested on
* IE 10
* Opera 12
* Firefox 19
* Chrome 24

## Use
### Simple initialization
```
$('select#from').tselects($('select#to'));
```

### Advanced initialization
```
$(document).tselects({
	$from: $('select#from'),
	$to: $('select#to'),
	dblclick: true
});
```

### Execute moving functions
```
$('select#from').tselects('addAll');
$('select#from').tselects('add');
$('select#from').tselects('remove');
$('select#from').tselects('removeAll');
```
Or
```
$('select#to').tselects('addAll');
$('select#to').tselects('add');
$('select#to').tselects('remove');
$('select#to').tselects('removeAll');
```