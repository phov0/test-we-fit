const menu = $(".btn-group-vertical");
menu.addClass("btn-group-horizontal");
menu.removeClass("btn-group-vertical");

const header = $(".jumbotron");
header.css({
    textAlign:"right",
    color: "white",
    backgroundColor: "#6c757d"
});

const headerBtn = header.find(".btn");

headerBtn.addClass("btn-success");
headerBtn.removeClass("btn-primary")

const cardsRow = $(".container .row").eq(2);

const cardBtn = cardsRow.find("a").eq(1);

cardBtn.addClass("btn-success");
cardBtn.removeClass("btn-primary")

const list = $(".list-group");
list.find("li:first").removeClass("active")
list.append('<li class="list-group-item active">Quarto item</li>');
list.append('<li class="list-group-item">Quinto item</li>');



