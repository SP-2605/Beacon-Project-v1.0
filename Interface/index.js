// Sidenav
$(document).ready(function () {
    $('.sidenav').sidenav();
});

//Dropdown
$(document).ready(function () {
    $(".dropdown-trigger").dropdown({hover: false});
});

//Collapbsible
$(document).ready(function () {
    $('.collapsible').collapsible();
});

//FAB
$(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton();
});

//TOOLTIP
$(document).ready(function () {
    $('.tooltipped').tooltip();
});

//MODAL
$(document).ready(function () {
    $('.modal').modal();
});

//PAGINATION
$('#collection-1').materializePagination({
    lastPage: 6,
    firstPage: 1,
    urlParameter:'page',
    useUrlParameter:'true',
    onClickCallback:function(){}
});
