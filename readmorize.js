// based on: https://css-tricks.com/text-fade-read-more/

(function ($) {
    /* const */ var readMoreExpanderHtml = "<div class='readmorize-expander-container'><button class='readmorize-expander btn btn-default btn-sm'>More</button></div>";
    /* const */ var readMoreGradientHtml = "<div class='readmorize-gradient'></div>";

    var onReadMoreExpanderClicked = function(eventSource, options) {
        var link = $(eventSource);
        var container = link.parents(".readmorize:first");
        var target = container.parents(".readmorize-target:first");

        var totalHeight = target.prop("scrollHeight");
        var newHeight = totalHeight;

        // expand by step if step defined
        if (options.step) {
            newHeight = target.height() + options.step;
        }

        // don't expand more than the total height of the target
        newHeight = newHeight > totalHeight ? totalHeight : newHeight;

        // expand to end if the remaining part is less than one step
        if (options.step && totalHeight - newHeight < options.step) {
            newHeight = totalHeight;
        }

        target
            .css({
                // set height to prevent instant jumpdown when max height is removed
                "height": target.height(),
                "max-height": 9999
            })
            .animate({
                "height": newHeight
            });

        // fade out read-more if the end reached
        if (newHeight >= totalHeight) {
            container.fadeOut();
        }

        // prevent jump-down
        return false;
    };

    $.fn.readmorize = function(options) {
        var readmoreTarget = $(this);
        var opts = $.extend({}, $.fn.readmorize.defaults, options);

        if (readmoreTarget.prop("scrollHeight") <= opts.overflowAfter) {
            return this;
        }

        var readMore = $("<div class='readmorize'></div>");
        var readMoreGradient = $(readMoreGradientHtml);
        var readMoreExpander = $(readMoreExpanderHtml);

        readMore.append(readMoreGradient);
        readMore.append(readMoreExpander);

        $(".readmorize-expander", readMore).click(function () {
            onReadMoreExpanderClicked(this, opts);
        });

        readmoreTarget.addClass("readmorize-target");
        readmoreTarget.css("maxHeight", opts.overflowAfter + "px");

        readmoreTarget.append(readMore);

        // set gradient height only after read more is visible (cause expander height is needed)
        var gradientHeight = readMoreExpander.height() + 30;

        if (gradientHeight > readmoreTarget.height()) {
            console.warn("Redmorize target has less height than the readmorize expander!");
        }

        $(".readmorize-gradient", readMore).height(gradientHeight);

        return this;
    };

    $.fn.readmorize.defaults = {
        step: 150,
        overflowAfter: 150 // px
    };
})($);