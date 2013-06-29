/*
// jQuery Selects Transfer
//
*/

(function ($) {
    $.fn.tselects = function (options) {
        if (this.length == 0 || arguments[0] == undefined) return this; // quick fail

        // Handle API methods
        if (typeof arguments[0] == 'string') {
            // Perform API methods on individual elements
            if (this.length > 1) {
                var args = arguments;
                return this.each(function () {
                    $.fn.tselects.apply($(this), args);
                });
            };
            // Invoke API method handler
            $.fn.tselects[arguments[0]].apply(this, $.makeArray(arguments).slice(1) || []);
            // Quick exit...
            return this;
        };


        // Set element options
        var elements = { $from: this };
        if (arguments[0] instanceof jQuery) {
            elements.$to = arguments[0];
            options = {};
        }

        // Initialize options for this call
        var options = $.extend(
			{}/* new object */,
			$.fn.tselects.options/* default options */,
            elements, /* elements selector*/
			options || {} /* just-in-time options */
		);

        // Quick check
        if (!options.$from.length || !options.$to.length)
            return this;

        // Set data
        $(options.$from).data('tselects', $.extend({}, options));
        $(options.$to).data('tselects', $.extend({}, options));

        // Mount events
        // dblclick
        if (options.dblclick) {
            options.$from.dblclick(function () { options.$from.tselects('add'); }); 
            options.$to.dblclick(function () { options.$to.tselects('remove'); });
        }

        return this; // don't break the chain...
    };

    /*
    ### Privete functions ###
    */

    var getParentTagName = function ($elm) {
        return $elm.parent().prop("tagName").toLowerCase();
    };

    var moveElemenents = function ($from, $to, moveAll) {
        var $options;
        if (moveAll) $options = $('option', $from);
        else $options = $('option:selected', $from);

        $options.each(function (i, t) {

            if (getParentTagName($(t)) != 'optgroup') {
                $(t).removeProp('selected').appendTo($to);
            } else {
                var $optgroupFrom = $(t).parent();
                var $optgroupTo;

                var value = $optgroupFrom.attr('value');
                var label = $optgroupFrom.attr('label');

                // Search optgroup
                $('optgroup', $to).each(function (ii, tt) {
                    if ((value != undefined && $(tt).attr('value') == value) || 
                        (label != undefined && $(tt).attr('label') == label)) 
                    {
                        return $optgroupTo = $(tt);
                    }
                });

                // Clone optgroup
                if (!$optgroupTo) {
                    var $clone = $optgroupFrom.clone(true);
                    $clone.empty();
                    $optgroupTo = $clone.appendTo($to);
                }

                // Move element
                $(t).removeProp('selected').appendTo($optgroupTo);

                // Remove optgroup if empty
                if ($optgroupFrom.children().length <= 0) {
                    $optgroupFrom.remove();
                }

            }
        });
    };

    /*
    ### API ###
    */
    $.extend($.fn.tselects, {
        add: function () {
            var opt = this.data('tselects'); if (!opt) return this;

            moveElemenents(opt.$from, opt.$to, false);
        },
        addAll: function () {
            var opt = this.data('tselects'); if (!opt) return this;

            moveElemenents(opt.$from, opt.$to, true);
        },
        remove: function () {
            var opt = this.data('tselects'); if (!opt) return this;

            moveElemenents(opt.$to, opt.$from, false);
        },
        removeAll: function () {
            var opt = this.data('tselects'); if (!opt) return this;

            moveElemenents(opt.$to, opt.$from, true);
        }
    });

    /*
    ### Default Settings ###
    */
    $.fn.tselects.options = {
        dblclick: true
    };
})(jQuery)