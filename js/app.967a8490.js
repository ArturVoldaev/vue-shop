(function(){"use strict";var t={7744:function(t,e,a){var r=a(8935),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"header"},[a("div",{staticClass:"header__wrapper container"},[a("span",{staticClass:"header__info"},[t._v("Каталог")]),t._m(0),a("a",{staticClass:"header__tel",attrs:{href:"tel:8 800 600 90 09"}},[t._v(" 8 800 600 90 09 ")]),a("CartIndicator")],1)]),a("router-view"),a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__wrapper container"},[t._m(1),a("ul",{staticClass:"footer__social social"},[a("li",{staticClass:"social__item"},[a("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Вконтакте"}},[a("svg",{attrs:{width:"20",height:"11",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-vk"}})])])]),a("li",{staticClass:"social__item"},[a("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Инстаграм"}},[a("svg",{attrs:{width:"17",height:"17",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-insta"}})])])]),a("li",{staticClass:"social__item"},[a("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Facebook"}},[a("svg",{attrs:{width:"17",height:"17",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-facebook"}})])])]),a("li",{staticClass:"social__item"},[a("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Twitter"}},[a("svg",{attrs:{width:"17",height:"14",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-twitter"}})])])]),a("li",{staticClass:"social__item"},[a("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Telegram"}},[a("svg",{attrs:{width:"19",height:"17",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-telegram"}})])])])]),a("p",{staticClass:"footer__desc"},[t._v(" Все права на материалы, находящиеся на сайте, охраняются в соответствии законодательством РФ, в том числе об авторском праве и смежных правах. ")]),t._m(2),a("span",{staticClass:"footer__copyright"},[t._v(" © 2020 Технозавррр ")])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"header__logo",attrs:{href:"#"}},[a("img",{attrs:{src:"img/svg/logo-tech.svg",alt:"Логотип интернет магазина Технозавррр",width:"190",height:"33"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"footer__links"},[a("li",[a("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Каталог ")])]),a("li",[a("a",{staticClass:"footer__link",attrs:{href:"tel:88006009009"}},[t._v(" 8 800 600 90 09 ")])]),a("li",[a("a",{staticClass:"footer__link",attrs:{href:"mailto:hi@technozavrrr.com"}},[t._v(" hi@technozavrrr.com ")])]),a("li",[a("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Распродажа ")])]),a("li",[a("a",{staticClass:"footer__link footer__link--medium",attrs:{href:"#"}},[t._v(" Заказать звонок ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"footer__data"},[a("li",[a("a",{staticClass:"footer__link",attrs:{href:"#",target:"_blank",rel:"noopener",type:"application/pdf"}},[t._v(" Политика конфиденциальности ")])]),a("li",[a("a",{staticClass:"footer__link",attrs:{href:"#",target:"_blank",rel:"noopener",type:"application/pdf"}},[t._v(" Публичная оферта ")])])])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"header__cart",attrs:{to:{name:"cart"},"aria-label":"Корзина с товарами"}},[a("svg",{attrs:{width:"30",height:"21",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-cart"}})]),a("span",{staticClass:"header__count",attrs:{"aria-label":"Количество товаров"}},[t._v(t._s(t.$store.state.cartProducts.length))])])},c=[],l={},n=l,u=a(1001),d=(0,u.Z)(n,i,c,!1,null,null,null),_=d.exports,p=a(4665),m={components:{CartIndicator:_},created(){const t=localStorage.getItem("userAccessKey");t&&this.updateUserAccessKey(t),this.loadCart()},methods:{...(0,p.nv)(["loadCart"]),...(0,p.OI)(["updateUserAccessKey"])}},f=m,h=(0,u.Z)(f,s,o,!1,null,null,null),v=h.exports,C=a(2809),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"content container"},[t._m(0),r("div",{staticClass:"content__catalog"},[r("ProductFilter",{attrs:{"price-from":t.filterPriceFrom,"price-to":t.filterPriceTo,"category-id":t.filterCategoryId,color:t.filterColor},on:{"update:priceFrom":function(e){t.filterPriceFrom=e},"update:price-from":function(e){t.filterPriceFrom=e},"update:priceTo":function(e){t.filterPriceTo=e},"update:price-to":function(e){t.filterPriceTo=e},"update:categoryId":function(e){t.filterCategoryId=e},"update:category-id":function(e){t.filterCategoryId=e},"update:color":function(e){t.filterColor=e}}}),r("section",{staticClass:"catalog"},[t.productsLoading?r("img",{staticClass:"preloaderLogo",attrs:{src:a(7414)}}):t._e(),t.productsLoadingFaled?r("div",[t._v(" Произошла ошибка, при загрузке товаров... "),r("button",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.loadProducts.apply(null,arguments)}}},[t._v(" Пробовать еще раз ")])]):t._e(),r("ProductList",{attrs:{products:t.products}}),r("BasePagination",{attrs:{count:t.countProducts,"per-page":t.productsPerPage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content__top content__top--catalog"},[a("h1",{staticClass:"content__title"},[t._v("Каталог")]),a("span",{staticClass:"content__info"},[t._v(" 152 товара ")])])}],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"catalog__list"},t._l(t.products,(function(t){return a("li",{key:t.id,staticClass:"catalog__item"},[a("ProductItem",{attrs:{product:t}})],1)})),0)},P=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{staticClass:"catalog__pic",attrs:{to:{name:"product",params:{id:t.product.id}}}},[a("img",{attrs:{src:t.product.image,alt:t.product.title}})]),a("h3",{staticClass:"catalog__title"},[a("router-link",{attrs:{to:{name:"product",params:{id:t.product.id}}}},[t._v(" "+t._s(t.product.title)+" ")])],1),a("span",{staticClass:"catalog__price"},[t._v(" "+t._s(t._f("numberFormat")(t.product.price))+" ₽ ")]),a("ul",{staticClass:"colors colors--black"},t._l(t.product.colors,(function(e){return a("li",{key:e.id,staticClass:"colors__item"},[a("label",{staticClass:"colors__label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],staticClass:"colors__radio sr-only",attrs:{type:"radio"},domProps:{value:e.id,checked:t._q(t.color,e.id)},on:{change:function(a){t.color=e.id}}}),a("span",{staticClass:"colors__value",style:{"background-color":e.code}})])])})),0)],1)},I=[];function x(t){return(new Intl.NumberFormat).format(t)}var $={props:["product"],filters:{numberFormat:x},data(){return{color:this.product.colors[0].id}}},D=$,w=(0,u.Z)(D,k,I,!1,null,null,null),A=w.exports,F={props:["products"],components:{ProductItem:A}},T=F,E=(0,u.Z)(T,y,P,!1,null,null,null),Z=E.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"catalog__pagination pagination"},[a("li",{staticClass:"pagination__item"},[a("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":t.computedLeftArrow},attrs:{href:"#","aria-label":"Предыдущая страница"},on:{click:function(e){return e.preventDefault(),t.previousPage.apply(null,arguments)}}},[a("svg",{attrs:{width:"8",height:"14",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])])]),t._l(t.pages,(function(e,r){return a("li",{key:r,staticClass:"pagination__item"},[a("a",{staticClass:"pagination__link",class:{"pagination__link--current":e===t.page},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.paginate(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",{staticClass:"pagination__item"},[a("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":t.computedRightArrow},attrs:{href:"#","aria-label":"Следующая страница"},on:{click:function(e){return e.preventDefault(),t.nextPage.apply(null,arguments)}}},[a("svg",{attrs:{width:"8",height:"14",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])],2)},K=[],L={props:["page","count","perPage"],model:{prop:"page",event:"paginate"},data(){return{}},methods:{paginate(t){this.$emit("paginate",t)},nextPage(){return this.page<this.pages&&this.$emit("paginate",this.page+1)},previousPage(){return this.page>1&&this.$emit("paginate",this.page-1)}},computed:{pages(){return Math.ceil(this.count/this.perPage)},computedLeftArrow(){return 1==this.page},computedRightArrow(){return this.page==this.pages}}},O=L,S=(0,u.Z)(O,V,K,!1,null,null,null),B=S.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"filter"},[a("h2",{staticClass:"filter__title"},[t._v("Фильтры")]),a("form",{staticClass:"filter__form form",attrs:{action:"#",method:"get"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("fieldset",{staticClass:"form__block"},[a("legend",{staticClass:"form__legend"},[t._v("Цена")]),a("label",{staticClass:"form__label form__label--price"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceFrom,expression:"currentPriceFrom",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"text",name:"min-price"},domProps:{value:t.currentPriceFrom},on:{input:function(e){e.target.composing||(t.currentPriceFrom=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("span",{staticClass:"form__value"},[t._v("От")])]),a("label",{staticClass:"form__label form__label--price"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceTo,expression:"currentPriceTo",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"text",name:"max-price"},domProps:{value:t.currentPriceTo},on:{input:function(e){e.target.composing||(t.currentPriceTo=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("span",{staticClass:"form__value"},[t._v("До")])])]),a("fieldset",{staticClass:"form__block"},[a("legend",{staticClass:"form__legend"},[t._v("Категория")]),a("label",{staticClass:"form__label form__label--select"},[a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.currentCategoryId,expression:"currentCategoryId",modifiers:{number:!0}}],staticClass:"form__select",attrs:{type:"text",name:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var a="_value"in e?e._value:e.value;return t._n(a)}));t.currentCategoryId=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0"}},[t._v("Все категории")]),t._l(t.categories,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.title)+" ")])}))],2)])]),a("fieldset",{staticClass:"form__block"},[a("legend",{staticClass:"form__legend"},[t._v("Цвет")]),a("ul",{staticClass:"colors"},t._l(t.colors,(function(e){return a("li",{key:e.id,staticClass:"colors__item"},[a("label",{staticClass:"colors__label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentColor,expression:"currentColor"}],staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color"},domProps:{value:e.id,checked:t._q(t.currentColor,e.id)},on:{change:function(a){t.currentColor=e.id}}}),a("span",{staticClass:"colors__value",style:{"background-color":e.code}})])])})),0)]),a("button",{staticClass:"filter__submit button button--primery",attrs:{type:"submit"}},[t._v(" Применить ")]),a("button",{staticClass:"filter__reset button button--second",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.reset.apply(null,arguments)}}},[t._v(" Сбросить ")])])])},U=[],q=a(7581);const M="https://vue-study.skillbox.cc";var j={props:["priceFrom","priceTo","categoryId","color"],data(){return{currentPriceFrom:0,currentPriceTo:0,currentCategoryId:0,currentColor:"1",categoriesData:null,colorsData:null}},computed:{categories(){return this.categoriesData?this.categoriesData.items:[]},colors(){return this.colorsData?this.colorsData.items.filter((t=>12!==t.id)):[]}},methods:{submit(){this.$emit("update:priceFrom",this.currentPriceFrom),this.$emit("update:priceTo",this.currentPriceTo),this.$emit("update:categoryId",this.currentCategoryId),this.$emit("update:color",this.currentColor)},reset(){this.$emit("update:priceFrom",0),this.$emit("update:priceTo",0),this.$emit("update:categoryId",0),this.$emit("update:color","#9200e0")},loadCategories(){q.Z.get(M+"/api/productCategories").then((t=>this.categoriesData=t.data))},loadColors(){q.Z.get(M+"/api/colors").then((t=>this.colorsData=t.data))}},watch:{priceFrom(t){this.currentPriceFrom=t},priceTo(t){this.currentPriceTo=t},categoryId(t){this.currentCategoryId=t},color(t){this.currentColor=t}},created(){this.loadCategories(),this.loadColors()}},z=j,R=(0,u.Z)(z,N,U,!1,null,null,null),G=R.exports,H={components:{ProductList:Z,BasePagination:B,ProductFilter:G},data(){return{page:1,productsPerPage:6,filterPriceFrom:0,filterPriceTo:0,filterCategoryId:0,filterColor:"",productsData:null,productsLoading:!1,productsLoadingFaled:!1}},computed:{products(){return this.productsData?this.productsData.items.map((t=>({...t,image:t.image.file.url}))):[]},countProducts(){return this.productsData?this.productsData.pagination.total:0}},methods:{loadProducts(){this.productsLoading=!0,this.productsLoadingFaled=!1,clearTimeout(this.loadProductsTimer),this.loadProductsTimer=setTimeout((()=>{q.Z.get(M+"/api/products",{params:{page:this.page,limit:this.productsPerPage,categoryId:this.filterCategoryId,minPrice:this.filterPriceFrom,maxPrice:this.filterPriceTo,colorId:this.filterColor}}).then((t=>this.productsData=t.data)).catch((()=>this.productsLoadingFaled=!0)).then((()=>this.productsLoading=!1))}),2e3)}},watch:{page(){this.loadProducts()},productsPerPage(){this.loadProducts()},filterCategoryId(){this.loadProducts()},filterPriceFrom(){this.loadProducts()},filterPriceTo(){this.loadProducts()},filterColor(){this.loadProducts()}},created(){this.loadProducts()}},J=H,Q=(0,u.Z)(J,g,b,!1,null,null,null),W=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"content container"},[a("div",{staticClass:"content__top"},[a("ul",{staticClass:"breadcrumbs"},[a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goToPage("main")}}},[t._v(" Каталог ")])]),t._m(0)])]),a("h1",[t._v("Страница не найдена")]),a("h2",[t._v(" Чтобы вернуться на главную страницу сайта перейдите по "),a("router-link",{staticClass:"linkBack",attrs:{to:{name:"main"}}},[t._v(" ссылке ")])],1)])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link"},[t._v(" 404 ")])])}],tt={},et=tt,at=(0,u.Z)(et,X,Y,!1,null,null,null),rt=at.exports,st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.productsLoading?r("main",{staticClass:"content container"},[t.productsLoading?r("img",{staticClass:"preloaderLogo",attrs:{src:a(7414)}}):t._e()]):t.productsData?r("main",{staticClass:"content container"},[r("div",{staticClass:"content__top"},[r("ul",{staticClass:"breadcrumbs"},[r("li",{staticClass:"breadcrumbs__item"},[r("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v(" Каталог ")])],1),r("li",{staticClass:"breadcrumbs__item"},[r("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v(" "+t._s(t.category.title)+" ")])],1),r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link"},[t._v(" "+t._s(t.products.title)+" ")])])])]),r("section",{staticClass:"item"},[r("div",{staticClass:"item__pics pics"},[r("div",{staticClass:"pics__wrapper"},[r("img",{attrs:{width:"570",height:"570",src:t.products.image.file.url,alt:t.products.title}})])]),r("div",{staticClass:"item__info"},[r("span",{staticClass:"item__code"},[t._v("Артикул: "+t._s(t.products.id))]),r("h2",{staticClass:"item__title"},[t._v(t._s(t.products.title))]),r("div",{staticClass:"item__form"},[r("form",{staticClass:"form",attrs:{action:"#",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.addToCart.apply(null,arguments)}}},[r("b",{staticClass:"item__price"},[t._v(" "+t._s(t._f("numberFormat")(t.products.price))+" ₽ ")]),r("fieldset",{staticClass:"form__block"},[r("legend",{staticClass:"form__legend"},[t._v("Цвет:")]),r("ul",{staticClass:"colors"},t._l(t.colors,(function(e){return r("li",{key:e.id,staticClass:"colors__item"},[r("label",{staticClass:"colors__label"},[r("input",{staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color-item"},domProps:{value:t.colors.title,checked:t.colors[0].id===e.id}}),r("span",{staticClass:"colors__value",style:{"background-color":e.code}})])])})),0)]),r("div",{staticClass:"item__row"},[r("div",{staticClass:"form__counter"},[r("button",{attrs:{type:"button","aria-label":"Убрать один товар"},on:{click:function(e){e.preventDefault(),t.productAmount>0&&t.productAmount--}}},[r("svg",{attrs:{width:"12",height:"12",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-minus"}})])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.productAmount,expression:"productAmount"}],attrs:{type:"text",name:"count"},domProps:{value:t.productAmount},on:{input:function(e){e.target.composing||(t.productAmount=e.target.value)}}}),r("button",{attrs:{type:"button","aria-label":"Добавить один товар"},on:{click:function(e){e.preventDefault(),t.productAmount++}}},[r("svg",{attrs:{width:"12",height:"12",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),r("button",{staticClass:"button button--primery",attrs:{type:"submit",disabled:t.productAddSending}},[t._v(" В корзину ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.productAdded,expression:"productAdded"}]},[t._v("Товар добавлен в корзину")]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.productAddSending,expression:"productAddSending"}]},[t._v("Добавление товара в корзину")])])])])])]):r("main",{staticClass:"content container"},[t._v(" Произошла ошибка, при загрузке товаров... "),r("button",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.loadProducts.apply(null,arguments)}}},[t._v(" Пробовать еще раз ")])])])},ot=[],it={props:["pageParams"],data(){return{productAmount:1,productsData:null,productsLoading:!1,productsLoadingFaled:!1,productAdded:!1,productAddSending:!1}},computed:{products(){return this.productsData},category(){return this.productsData.category},colors(){return this.productsData.colors}},methods:{...(0,p.nv)(["addProductToCart"]),addToCart(){this.productAdded=!1,this.productAddSending=!0,this.addProductToCart({productId:this.products.id,amount:this.productAmount}).then((()=>{this.productAdded=!0,this.productAddSending=!1}))},loadProduct(){this.productsLoading=!0,this.productsLoadingFaled=!1,q.Z.get(M+"/api/products/"+this.$route.params.id).then((t=>this.productsData=t.data)).catch((()=>this.productsLoadingFaled=!0)).then((()=>this.productsLoading=!1))}},filters:{numberFormat:x},watch:{"$route.params.id":{handler(){this.loadProduct()},immediate:!0}}},ct=it,lt=(0,u.Z)(ct,st,ot,!1,null,null,null),nt=lt.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"content container"},[a("div",{staticClass:"content__top"},[a("ul",{staticClass:"breadcrumbs"},[a("li",{staticClass:"breadcrumbs__item"},[a("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v(" Каталог ")])],1),t._m(0)]),a("h1",{staticClass:"content__title"},[t._v("Корзина")]),a("span",{staticClass:"content__info"},[t._v(" "+t._s(t.cartTotalAmount)+" товара ")])]),a("section",{staticClass:"cart"},[a("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[a("div",{staticClass:"cart__field"},[a("ul",{staticClass:"cart__list"},t._l(t.products,(function(t){return a("CartItem",{key:t.productId,attrs:{item:t}})})),1)]),a("div",{staticClass:"cart__block"},[a("p",{staticClass:"cart__desc"},[t._v(" Мы посчитаем стоимость доставки на следующем этапе ")]),a("p",{staticClass:"cart__price"},[t._v(" Итого: "),a("span",[t._v(" "+t._s(t._f("numberFormat")(t.totalPrice))+" ₽")])]),t.totalPrice>0?a("router-link",{staticClass:"cart__button button button--primery",attrs:{tag:"button",to:{name:"order"},type:"submit"}},[t._v(" Оформить заказ ")]):t._e()],1)])])])},dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link"},[t._v(" Корзина ")])])}],_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"cart__item product"},[a("div",{staticClass:"product__pic"},[a("img",{attrs:{src:t.item.product.image,width:"120",height:"120",alt:t.item.product.title}})]),a("h3",{staticClass:"product__title"},[t._v(" "+t._s(t.item.product.title)+" ")]),a("span",{staticClass:"product__code"},[t._v(" Артикул: "+t._s(t.item.product.id)+" ")]),a("BaseUpDownInput",{attrs:{item:t.item}}),a("b",{staticClass:"product__price"},[t._v(" "+t._s(t._f("numberFormat")(t.item.product.price*t.item.amount))+" ₽ ")]),a("button",{staticClass:"product__del button-del",attrs:{type:"button","aria-label":"Удалить товар из корзины"},on:{click:function(e){return e.preventDefault(),t.removeItemCart(t.item.product.id)}}},[a("svg",{attrs:{width:"20",height:"20",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-close"}})])])],1)},pt=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product__counter form__counter"},[a("button",{attrs:{type:"button","aria-label":"Убрать один товар"},on:{click:function(e){return e.preventDefault(),t.removeFromCart.apply(null,arguments)}}},[a("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-minus"}})])]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.amount,expression:"amount",modifiers:{number:!0}}],attrs:{type:"text",name:"count"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("button",{attrs:{type:"button","aria-label":"Добавить один товар"},on:{click:function(e){return e.preventDefault(),t.addToCart.apply(null,arguments)}}},[a("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-plus"}})])])])},ft=[],ht={props:["item"],computed:{amount:{get(){return this.item.amount},set(t){this.$store.dispatch("updateCartProductAmount",{productId:this.item.productId,amount:t})}}},methods:{...(0,p.OI)({deleteProduct:"deleteCartProduct",addProductToCartDetal:"addProductToCart"}),addToCart(){this.amount++},removeFromCart(){this.amount>0&&this.amount--}}},vt=ht,Ct=(0,u.Z)(vt,mt,ft,!1,null,null,null),gt=Ct.exports,bt={props:["item"],components:{BaseUpDownInput:gt},filters:{numberFormat:x},computed:{amount:{get(){return this.item.amount},set(t){this.$store.dispatch("updateCartProductAmount",{productId:this.item.productId,amount:t})}}},methods:{...(0,p.nv)(["deleteCartProduct"]),removeItemCart(t){this.$store.dispatch("deleteCartProduct",{productId:t})}}},yt=bt,Pt=(0,u.Z)(yt,_t,pt,!1,null,null,null),kt=Pt.exports,It={components:{CartItem:kt},filters:{numberFormat:x},computed:{...(0,p.Se)({products:"cartDetailProducts",totalPrice:"cartTotalPrice",cartTotalAmount:"cartTotalAmount"})}},xt=It,$t=(0,u.Z)(xt,ut,dt,!1,null,null,null),Dt=$t.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"content container"},[t._m(0),a("section",{staticClass:"cart"},[a("form",{staticClass:"cart__form form",on:{submit:function(e){return e.preventDefault(),t.order.apply(null,arguments)}}},[a("div",{staticClass:"cart__field"},[a("div",{staticClass:"cart__data"},[a("BaseFormTextVue",{attrs:{title:"ФИО",placeholder:"Введите ваше полное имя",error:t.formError.name},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),a("BaseFormTextVue",{attrs:{title:"Адрес доставки",placeholder:"Введите ваш адрес",error:t.formError.address},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}}),a("BaseFormTextVue",{attrs:{type:"tel",title:"Телефон",placeholder:"Введите ваш телефон",error:t.formError.phone},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}}),a("BaseFormTextVue",{attrs:{type:"email",title:"Email",placeholder:"Введи ваш Email",error:t.formError.email},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),a("BaseFormTextAriaVue",{attrs:{title:"Комментарий к заказу",placeholder:"Ваши пожелания",error:t.formError.comment},model:{value:t.formData.comment,callback:function(e){t.$set(t.formData,"comment",e)},expression:"formData.comment"}})],1),t._m(1)]),a("div",{staticClass:"cart__block"},[a("ul",{staticClass:"cart__orders"},t._l(t.products,(function(e){return a("li",{key:e.productId,staticClass:"cart__order"},[a("h3",[t._v(t._s(e.product.title))]),a("b",[t._v(t._s(t._f("numberFormat")(e.product.price*e.amount))+" ₽")]),a("span",[t._v("Артикул: "+t._s(e.product.id))])])})),0),a("div",{staticClass:"cart__total"},[t._m(2),a("p",[t._v(" Итого: "),a("b",[t._v(t._s(t.cartTotalAmount))]),t._v(" товара на сумму "),a("b",[t._v(t._s(t._f("numberFormat")(t.totalPrice))+" ₽")])])]),a("button",{staticClass:"cart__button button button--primery",attrs:{type:"submit"}},[t._v(" Оформить заказ ")])]),t.formErrorMessage?a("div",{staticClass:"cart__error form__error-block"},[a("h4",[t._v("Заявка не отправлена!")]),a("p",[t._v(" "+t._s(t.formErrorMessage)+" ")])]):t._e()])])])},At=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content__top"},[a("ul",{staticClass:"breadcrumbs"},[a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link",attrs:{href:"cart.html"}},[t._v(" Корзина ")])]),a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link"},[t._v(" Оформление заказа ")])])]),a("h1",{staticClass:"content__title"},[t._v("Корзина")]),a("span",{staticClass:"content__info"},[t._v(" 3 товара ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart__options"},[a("h3",{staticClass:"cart__title"},[t._v("Доставка")]),a("ul",{staticClass:"cart__options options"},[a("li",{staticClass:"options__item"},[a("label",{staticClass:"options__label"},[a("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"delivery",value:"0",checked:""}}),a("span",{staticClass:"options__value"},[t._v(" Самовывоз "),a("b",[t._v("бесплатно")])])])]),a("li",{staticClass:"options__item"},[a("label",{staticClass:"options__label"},[a("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"delivery",value:"500"}}),a("span",{staticClass:"options__value"},[t._v(" Курьером "),a("b",[t._v("500 ₽")])])])])]),a("h3",{staticClass:"cart__title"},[t._v("Оплата")]),a("ul",{staticClass:"cart__options options"},[a("li",{staticClass:"options__item"},[a("label",{staticClass:"options__label"},[a("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"pay",value:"card"}}),a("span",{staticClass:"options__value"},[t._v(" Картой при получении ")])])]),a("li",{staticClass:"options__item"},[a("label",{staticClass:"options__label"},[a("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"pay",value:"cash"}}),a("span",{staticClass:"options__value"},[t._v(" Наличными при получении ")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Доставка: "),a("b",[t._v("500 ₽")])])}],Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseFormFieldVue",{attrs:{title:t.title,error:t.error}},["checkbox"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],staticClass:"form__input",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.dataValue)?t._i(t.dataValue,null)>-1:t.dataValue},on:{change:function(e){var a=t.dataValue,r=e.target,s=!!r.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);r.checked?i<0&&(t.dataValue=a.concat([o])):i>-1&&(t.dataValue=a.slice(0,i).concat(a.slice(i+1)))}else t.dataValue=s}}}):"radio"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],staticClass:"form__input",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.dataValue,null)},on:{change:function(e){t.dataValue=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],staticClass:"form__input",attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.dataValue},on:{input:function(e){e.target.composing||(t.dataValue=e.target.value)}}})])},Tt=[],Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"form__label"},[a("span",{staticClass:"form__value"},[t._v(t._s(t.title))]),t._t("default"),t.error?a("span",{staticClass:"form__error"},[t._v(t._s(t.error))]):t._e()],2)},Zt=[],Vt={props:["title","error"]},Kt=Vt,Lt=(0,u.Z)(Kt,Et,Zt,!1,null,null,null),Ot=Lt.exports,St={components:{BaseFormFieldVue:Ot},props:{title:String,error:String,placeholder:String,value:String,type:{default:"text"}},computed:{dataValue:{get(){return this.value},set(t){this.$emit("input",t)}}}},Bt={mixins:[St]},Nt=Bt,Ut=(0,u.Z)(Nt,Ft,Tt,!1,null,null,null),qt=Ut.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseFormFieldVue",{attrs:{title:t.title,error:t.error}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],staticClass:"form__input form__input--area",attrs:{type:t.type,placeholder:t.placeholder},domProps:{value:t.dataValue},on:{input:function(e){e.target.composing||(t.dataValue=e.target.value)}}})])},jt=[],zt={mixins:[St]},Rt=zt,Gt=(0,u.Z)(Rt,Mt,jt,!1,null,null,null),Ht=Gt.exports,Jt={components:{BaseFormTextVue:qt,BaseFormTextAriaVue:Ht},data(){return{formData:{},formError:{},formErrorMessage:""}},filters:{numberFormat:x},computed:{...(0,p.Se)({products:"cartDetailProducts",totalPrice:"cartTotalPrice",cartTotalAmount:"cartTotalAmount"})},methods:{order(){this.formError={},this.formErrorMessage="",q.Z.post(M+"/api/orders",{...this.formData},{params:{userAccessKey:this.$store.state.userAccessKey}}).then((t=>{this.$store.commit("resetCart"),this.$store.commit("updateOrderInfo",t.data),this.$router.push({name:"orderInfo",params:{id:t.data.id}})})).catch((t=>{this.formError=t.response.data.error.request||{},this.formErrorMessage=t.response.data.error.message}))}}},Qt=Jt,Wt=(0,u.Z)(Qt,wt,At,!1,null,null,null),Xt=Wt.exports,Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"content container"},[a("div",{staticClass:"content__top"},[t._m(0),a("h1",{staticClass:"content__title"},[t._v("Заказ оформлен "),a("span",[t._v(t._s(t.orderInfoPage.id))])])]),a("section",{staticClass:"cart"},[a("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[a("div",{staticClass:"cart__field"},[a("p",{staticClass:"cart__message"},[t._v(" Благодарим за выбор нашего магазина. На Вашу почту придет письмо с деталями заказа. Наши менеджеры свяжутся с Вами в течение часа для уточнения деталей доставки. ")]),a("ul",{staticClass:"dictionary"},[a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Получатель ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(this.$store.state.orderInfo.name)+" ")])]),a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Адрес доставки ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(this.$store.state.orderInfo.address)+" ")])]),a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Телефон ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(this.$store.state.orderInfo.phone)+" ")])]),a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Email ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(this.$store.state.orderInfo.email)+" ")])]),t._m(1)])]),a("div",{staticClass:"cart__block"},[a("ul",{staticClass:"cart__orders"},t._l(t.basketItems,(function(e){return a("li",{key:e.productId,staticClass:"cart__order"},[a("h3",[t._v(t._s(e.product.title))]),a("b",[t._v(t._s(t._f("numberFormat")(e.product.price*e.quantity))+" ₽")]),a("span",[t._v("Артикул: "+t._s(e.product.id))])])})),0),a("div",{staticClass:"cart__total"},[t._m(2),a("p",[t._v(" Итого: "),a("b",[t._v(t._s(t.cartTotalAmount))]),t._v(" товара на сумму "),a("b",[t._v(t._s(t._f("numberFormat")(t.totalPrice))+" ₽")])])])])])])])},te=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"breadcrumbs"},[a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link",attrs:{href:"cart.html"}},[t._v(" Корзина ")])]),a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link"},[t._v(" Оформление заказа ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Способ оплаты ")]),a("span",{staticClass:"dictionary__value"},[t._v(" картой при получении ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Доставка: "),a("b",[t._v("500 ₽")])])}],ee={filters:{numberFormat:x},computed:{basketItems(){return this.$store.state.orderInfo.basket.items},totalPrice(){return this.$store.state.orderInfo.totalPrice},cartTotalAmount(){return this.$store.state.orderInfo.basket.items.length},...(0,p.Se)({orderInfoPage:"orderInfoPage"})},created(){this.$store.state.orderInfo&&this.$store.state.orderInfo.id===this.$route.params.id||this.$store.dispatch("loadOrderInfo",this.$route.params.id)}},ae=ee,re=(0,u.Z)(ae,Yt,te,!1,null,null,null),se=re.exports;r.Z.use(C.Z);const oe=[{name:"main",component:W,path:"/"},{name:"product",component:nt,path:"/product/:id"},{name:"notFound",component:rt,path:"*"},{name:"order",component:Xt,path:"/order"},{name:"orderInfo",component:se,path:"/order/:id"},{name:"cart",component:Dt,path:"/cart/"}],ie=new C.Z({routes:oe});var ce=ie;r.Z.use(p.ZP);var le=new p.ZP.Store({state:{cartProducts:[],userAccessKey:null,cartProductsData:[],orderInfo:null},mutations:{updateOrderInfo(t,e){t.orderInfo=e},resetCart(t){t.cartProducts=[],t.cartProductsData=[]},updateUserAccessKey(t,e){t.userAccessKey=e},updateCartProductsData(t,e){t.cartProductsData=e},syncCartProducts(t){t.cartProducts=t.cartProductsData.map((t=>({productId:t.product.id,amount:t.quantity})))},updateCartProductAmount(t,{productId:e,amount:a}){const r=t.cartProducts.find((t=>t.productId===+e));r&&(r.amount=a)},deleteCartProduct(t,e){t.cartProducts=t.cartProducts.filter((t=>t.productId!==e))}},getters:{cartDetailProducts(t){return t.cartProducts.map((e=>{const a=t.cartProductsData.find((t=>t.product.id===e.productId)).product;return{...e,product:{...a,image:a.image.file.url}}}))},cartTotalPrice(t,e){return e.cartDetailProducts.reduce(((t,e)=>e.product.price*e.amount+t),0)},cartTotalAmount(t){return t.cartProducts.length},orderInfoPage(t){return console.log(t.orderInfo),t.orderInfo}},actions:{loadOrderInfo(t,e){return q.Z.get(M+"/api/orders/"+e,{params:{userAccessKey:t.state.userAccessKey}}).then((e=>{t.commit("updateOrderInfo",e.data)}))},loadCart(t){return q.Z.get(M+"/api/baskets",{params:{userAccessKey:t.state.userAccessKey}}).then((e=>{t.state.userAccessKey||(localStorage.setItem("userAccessKey",e.data.user.accessKey),t.commit("updateUserAccessKey",e.data.user.accessKey)),t.commit("updateCartProductsData",e.data.items),t.commit("syncCartProducts")}))},addProductToCart(t,{productId:e,amount:a}){return new Promise((t=>setTimeout(t,2e3))).then((()=>q.Z.post(M+"/api/baskets/products",{productId:e,quantity:a},{params:{userAccessKey:t.state.userAccessKey}}).then((e=>{t.commit("updateCartProductsData",e.data.items),t.commit("syncCartProducts")}))))},updateCartProductAmount(t,{productId:e,amount:a}){if(t.commit("updateCartProductAmount",{productId:e,amount:a}),!(a<1))return q.Z.put(M+"/api/baskets/products",{productId:e,quantity:a},{params:{userAccessKey:t.state.userAccessKey}}).then((e=>{t.commit("updateCartProductsData",e.data.items)})).catch((()=>{t.commit("syncCartProducts")}))},deleteCartProduct(t,{productId:e}){t.commit("deleteCartProduct",e),q.Z["delete"](M+"/api/baskets/products",{params:{userAccessKey:t.state.userAccessKey},data:{productId:e}})}}});r.Z.config.productionTip=!1,new r.Z({router:ce,store:le,render:t=>t(v)}).$mount("#app")},7414:function(t,e,a){t.exports=a.p+"img/Spinner-2.6d3c0ed1.gif"}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,r,s,o){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],s=t[u][1],o=t[u][2];for(var c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){t.splice(u--,1);var n=s();void 0!==n&&(e=n)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,s,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/vue-shop/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,o,i=r[0],c=r[1],l=r[2],n=0;if(i.some((function(e){return 0!==t[e]}))){for(s in c)a.o(c,s)&&(a.m[s]=c[s]);if(l)var u=l(a)}for(e&&e(r);n<i.length;n++)o=i[n],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},r=self["webpackChunkshop_it"]=self["webpackChunkshop_it"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(7744)}));r=a.O(r)})();
//# sourceMappingURL=app.967a8490.js.map