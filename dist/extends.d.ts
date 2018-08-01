declare class Menu {
    items: Array<string>;
    pages: number;
    constructor(item_list: Array<string>, total_pages: number);
    list(): void;
}
declare var sundayMenu: Menu;
declare class HappyMeal extends Menu {
    constructor(item_list: Array<string>, total_pages: number);
    list(): void;
}
declare var menu_for_children: HappyMeal;
