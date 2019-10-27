var events = require("events")
var {EventEmitter} = require('events')

// console.log(EventEmitter)
// console.log(events)

////////////////////////////////
class NewsPublisher extends EventEmitter{
    constructor(name){
        // initiem logica de baza prin constructor superior
        super(); 
        this.name = name;
    }
}
////////////////////////////////
const news_point = new NewsPublisher("Simpals Point-Project");

//adaugam subscriberi
news_point.on("sport", (data)=>{
    console.log(data.title)
    console.log(data.published)
    console.log(data.author)
});
news_point.on("politics", (data)=>{
    console.log(data.title)
    console.log(data.published)
    console.log(data.author)
});

	
var today = new Date();

// simulam aparitia diferitor evenimente
setTimeout(()=>{
    news_point.emit('sport', {title:"Drugs detected in moldavian sportsmen", published: today, author:news_point.name});
}, 5000);
setTimeout(()=>{
    news_point.emit('politics', {title:"New Elections expected", published: today, author:news_point.name});
}, 2000);

// published : date
setTimeout(()=>{},24*60*60*1000)




// console.log(news_point)
