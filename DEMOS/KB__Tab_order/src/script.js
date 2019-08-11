        function setItem(e){
            e.preventDefault();
            e.stopPropagation();
            var $tab = $("#" + e.currentTarget.id),
               $panel = $("#" + $tab.attr("aria-controls")),
               $tabs = $("[role=tab]"),
               $panels = $("[role=tabpanel]");

            $tabs.attr("aria-selected", "false").attr("tabindex",-1);
            $tab.attr("aria-selected", "true").attr("tabindex",0);
            $panels.attr("aria-hidden", "true");
            $panel.attr("aria-hidden", "false");
        }
        
        function preSetTab(e) {
            var Keyboard = {
                    DOWN: 40,
                    ENTER: 13,
                    LEFT: 37,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                },
                $tabs = $("[role=tab]"),
                moveToNextTab = function () {
                    $.each($tabs, function(i, el) {
                        if(e.currentTarget.id === el.id && i < $tabs.length) {
                            $($tabs[i+1]).focus().trigger("click");
                             return false;
                        }
                    });
                },
                moveToPrevTab = function () {
                     $.each($tabs, function(i, el) {
                         if(e.currentTarget.id === el.id && i > 0) {
                            $($tabs[i-1]).focus().trigger("click");
                            return false;
                         }
                    });
                 };
            
             $.each(Keyboard, function(a,b) {
                if (e.which === Keyboard.ENTER || e.which === Keyboard.SPACE) {
                    setItem(e);
                    return false
                } else {
                    if(e.which === Keyboard.LEFT) {
                        moveToPrevTab();
                        return false;
                   } 
                    if (e.which === Keyboard.RIGHT) {
                        moveToNextTab();
                        return false;
                    } 
                }
            });
        }
        
        
        $("[role=tab]").on("click keydown", function(e) {
            //e.preventDefault();
            e.stopImmediatePropagation();
            if(e.type !== "click") {
                preSetTab(e);
            } else {
                setItem(e);
            }
        });
        
        $("[data-tab-next]").on("keydown", function(e) {
            if(e.which === 9 && $(this).data("tab-next") !== "") {
                e.preventDefault();
                $($(this).data("tab-next")).focus().trigger("click");
            }
        })