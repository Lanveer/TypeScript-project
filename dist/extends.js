// 原型对象
class Menu {
    // A straightforward constructor.
    constructor(item_list, total_pages) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }
    // Methods
    list() {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
// Call the list method.
sundayMenu.list();
class HappyMeal extends Menu {
    // Properties are inherited
    // A new constructor has to be defined.
    constructor(item_list, total_pages) {
        // In this case we want the exact same constructor as the parent class (Menu),
        // To automatically copy it we can call super() - a reference to the parent's constructor.
        super(item_list, total_pages);
    }
    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    list() {
        console.log("Our special menu for children:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);
// This time the log message will begin with the special introduction.
menu_for_children.list();
//# sourceMappingURL=extends.js.map