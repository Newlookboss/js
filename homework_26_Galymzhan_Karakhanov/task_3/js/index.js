$("#cart-items .item:contains('Cola 1.5 l.')").remove();

const chocolate = $("#cart-items .item:contains('Chocolate bar')").get(-1);
const newElement = $(
  "<div class='item'>Canned Fish<span class='qty'> x4</span></div>"
).get(-1);
chocolate.parentNode.replaceChild(newElement, chocolate);
