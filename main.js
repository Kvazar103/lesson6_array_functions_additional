// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
console.log("- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.\n" +
    "document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]")
// function cutString(str, n) {
//     let res = [];
//     for(let i = 0 ; i < str.length; i += n) {
//         res.push(str.substr(i, n));
//     }
//     return res;
// }
// console.log(cutString('наслаждение', 3));

function cutString(string,num){
    let array=[];
    for(let i=0;i<string.length;i+=num){
        array.push(string.substring(i,num+i))
    }
    return array
}
console.log(cutString('наслаждение', 3));
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
console.log("- Напишіть функцію delete_characters(str, length), яка повертає підрядок, " +
    "що складається із зазначеної кількості символів.")
function delete_characters(str,num){
   let newStr= str.slice(0,num)
    return newStr
}
console.log(delete_characters('Каждый охотник желает знать', 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. 
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
console.log("// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. \n" +
    "// При цьому всі символи рядка необхідно перевести у верхній регістр.")
let str = "HTML JavaScript PHP";

function insert_dash(str){
    let repl =str.replaceAll(` `,`-`)
    return repl
}
console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
console.log("// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка " +
    "з нижнього регістру у верхній.")
// - Дано список імен.
console.log("- Дано список імен.")
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
console.log("Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд:" +
    "// let n1 = 'Harry Potter'\n" +
    "// let n2 = 'Ron Whisley'\n" +
    "// let n3 = 'Hermione Granger'")
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function validString(str){
       str=str.replaceAll(`.`,` `);
       str=str.replaceAll(`-`,` `);
       str=str.replaceAll(`_`,` `)
    return str
    }
console.log(validString(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
console.log("- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.")

function randomNumFromZeroToHundred(zero,hundred){
     zero=0;
     hundred=100;
     zero=Math.ceil(zero);
     hundred=Math.floor(hundred);
     return Math.floor(Math.random() * (100 - 0)) + 0;
}

console.log(randomNumFromZeroToHundred());
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. 
//     Відсортувати його за допомоги sort
console.log("- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. \n" +
    "    Відсортувати його за допомоги sort")
let randomNumbersArray=[]
randomNumbersArray.length=8;

 function generateArrayNums(array){
     for (let i=0;i<array.length;i++){
         array[i]=randomNumFromZeroToHundred()
     }
     array.sort()
     return array
 }
console.log(generateArrayNums(randomNumbersArray));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. 
//     відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
console.log("- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. " +
    "відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)\n")
 let arrayNumbersFromZeroToTwenty=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

arrayNumbersFromZeroToTwenty=arrayNumbersFromZeroToTwenty.filter(function (el){
    if(!(el%2===0)){
        el=null
    }
    return el
})
console.log(arrayNumbersFromZeroToTwenty)
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
console.log("- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.")
let word='Hello'
let capitalize=(str)=>{
    return str.toUpperCase()
}
console.log(capitalize(word));
// - Створити функцію-валідатор для адрес електронної пошти. 
//     Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, 
//     крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, 
//     функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
console.log("- Створити функцію-валідатор для адрес електронної пошти. \n" +
    "    Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, \n" +
    "    крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, \n" +
    "    функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)")
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
console.log("Протестувати на значеннях\n" +
    "someemail@gmail.com\n" +
    "someeMAIL@gmail.com\n" +
    "someeMAIL@i.ua\n" +
    "some.email@gmail.com")
let firstExample='someemail@gmail.com'
let secondExample='someeMAIL@gmail.com'
let thirdExample='someeMAIL@i.ua'
let fourthExample='some.email@gmail.com'

function mailValidator(string){
    let emailArray=string.split('@');
    
    if(emailArray.length>2){
        console.log('There are two @!!!')
        console.log('your email:'+`${string}`)
        return false
    }
      console.log(emailArray)
    let[name,domain]=emailArray
    let domainArray=domain.split('.')
     console.log(domainArray)
    let[beforeDot,afterDot]=domainArray
    if(beforeDot.length<2){
        console.log('Dot should be at least 2 characters further after @')
        console.log('your email:'+`${string}`)
        return false
    }
    return string
}

console.log(mailValidator(thirdExample))

// - є масив
console.log("- є масив")
console.log("відсортувати його в спадаючому порядку за кількістю елементів в полі modules")
  let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
console.log("Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.")
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let tt = "Астрономия это наука о небесных объектах"

let count=(str,symb)=>{
    let arr=[]
    for(let i=0;i<str.length;i++){
        if(str[i]===symb){
            arr.push(str[i])
        }
    }
    return arr.length
}
console.log(count(tt, 'о'));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let sentence = "Сила тяжести приложена к центру масс тела";

let cutString1=(string,n)=>{
    let array=string.split(' ')
    let arr=[]
    for(let i=0;i<array[n].length+1;i++){
        arr.push(array[i])
    }
    return arr
}
console.log(cutString1(sentence,5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
console.log("// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).\n" +
    "// -знайти наібльшу книжку.\n" +
    "// - знайти книжку/ки з найбільшою кількістю жанрів\n" +
    "// - знайти книжку/ки з найдовшою назвою\n" +
    "// - знайти книжку/ки які писали 2 автори\n" +
    "// - знайти книжку/ки які писав 1 автор\n" +
    "// - вісортувати книжки по кількості сторінок по зростанню")

let books=[
    {
        name:'book1',
        pages:400,
        authors:['name1','name2'],
        genre:['horror','Western']
    },
    {
        name:'book_Long_lllllll',
        pages:300,
        authors:['name1'],
        genre:['horror','Western']
    },
    {
        name:'book3',
        pages:200,
        authors:['name3','name4'],
        genre:['horror','Western','Comedy']
    },
    {
        name:'book2',
        pages:500,
        authors:['name3'],
        genre:['horror','Western']
    },
]
console.log("-знайти наібльшу книжку.")
     function BiggerBook(array){
             let theBiggestBook=0;
                for(let book of books){
                   if(theBiggestBook<book.pages){
                      theBiggestBook=book.pages
                   }
                }
                    return theBiggestBook
           }
console.log(BiggerBook(books)); 
console.log("знайти книжку/ки з найбільшою кількістю жанрів")

function theMostGenreBooks(array) {
    let theGenereBooks=[];
    for (let book of books){
        if(book.genre.length>theGenereBooks.length){
            theGenereBooks=book.genre
        }
    }
    return theGenereBooks
}
console.log(theMostGenreBooks(books));
console.log("знайти книжку/ки з найдовшою назвою")

function theLongestNameOfBook(array){
    let name=[];
    for (let book of books){
        if(book.name.length>name.length){
            name=book.name
        }
    }
    return name
}
console.log(theLongestNameOfBook(books));
console.log("знайти книжку/ки які писали 2 автори")

function theMostAuthors(array){
    let nameOfAuthors=[]
    for (let book of books){
        if(book.authors.length===2){
            nameOfAuthors.push(book.authors)
        }
    }
    return nameOfAuthors
}
console.log(theMostAuthors(books));
console.log("знайти книжку/ки які писав 1 автор")

function onlyOneAuthor(array){
    let author=[];
    for(let book of books){
        if(book.authors.length===1){
            author.push(book.authors)
        }
    }
    return author
}

console.log(onlyOneAuthor(books));
console.log("вісортувати книжки по кількості сторінок по зростанню")
console.log(books.sort((a, b) => a.pages - b.pages));