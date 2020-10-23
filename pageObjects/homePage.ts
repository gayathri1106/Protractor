import { browser, by, element } from "protractor";
export class PageObjects {
    static searchBox() {
        return element(by.id('twotabsearchtextbox'));
    }
    static searchIcon(){
        return element(by.id('nav-search-submit-text'));
    }
    static sortBySelectBox(){
        return element(by.id('a-autoid-0-announce'));
    }
    static sortByLowPriceToHigh(){
        return element(by.id('s-result-sort-select_1'));
    }
    static sortByHighPriceToLow(){
        return element(by.id('s-result-sort-select_2'));
    }
    static sortByCustomerReview(){
        return element(by.id('s-result-sort-select_3'));
    }
    static sortByNewArrivals(){
        return element(by.id('s-result-sort-select_4'));
    }

}