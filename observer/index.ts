//one to many
import { Subject } from "rxjs";

const news = new Subject(); // whatch this

const tv1 = news.subscribe((v) => {
  console.log(v + " via tv1");
});
const tv2 = news.subscribe((v) => {
  console.log(v + " via tv2");
});
const tv3 = news.subscribe((v) => {
  console.log(v + " via tv3");
});

news.next("news : ");
news.next("this is the news");
