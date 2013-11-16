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
```javascript
$('select#from').tselects($('select#to'));
```

### Advanced initialization
```javascript
$(document).tselects({
	$from: $('select#from'),
	$to: $('select#to'),
	dblclick: true
});
```

### Execute moving functions
```javascript
$('select#from').tselects('addAll');
$('select#from').tselects('add');
$('select#from').tselects('remove');
$('select#from').tselects('removeAll');
```
Or
```javascript
$('select#to').tselects('addAll');
$('select#to').tselects('add');
$('select#to').tselects('remove');
$('select#to').tselects('removeAll');
```

##  License
The MIT License (MIT)

Copyright (c) 2013 JSimonait

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.